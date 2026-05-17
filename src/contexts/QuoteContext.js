'use client'

import { createContext, useContext, useEffect, useReducer, useState } from 'react'

// ---------------------------------------------------------------------------
// Price utilities
// ---------------------------------------------------------------------------

export function parsePrice(str) {
  if (!str || str === 'POA') return null
  const m = String(str).match(/[\d]+\.?\d*/)
  return m ? parseFloat(m[0]) : null
}

export function calcItemTotal(pricing, days, qty) {
  // pricing: { day1, extraDay, week, weekend } strings
  const day1 = parsePrice(pricing?.day1)
  const extra = parsePrice(pricing?.extraDay)
  const week = parsePrice(pricing?.week)
  if (!day1) return null
  let unitCost
  if (days >= 7 && week) {
    const weeks = Math.floor(days / 7)
    const rem = days % 7
    unitCost = weeks * week
    if (rem >= 1) unitCost += day1
    if (rem >= 2 && extra) unitCost += (rem - 1) * extra
  } else if (days === 1) {
    unitCost = day1
  } else {
    if (!extra) return null
    unitCost = day1 + (days - 1) * extra
  }
  return unitCost * qty
}

// ---------------------------------------------------------------------------
// State shape & reducer
// ---------------------------------------------------------------------------

const STORAGE_KEY = 'rowland-quote'

const initialState = {
  items: [],
  days: 1,
  startDate: '',
}

function quoteReducer(state, action) {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, ...action.payload }

    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.item.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.item, qty: 1 }] }
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.id) }

    case 'UPDATE_QTY': {
      if (action.qty < 1) {
        return { ...state, items: state.items.filter((i) => i.id !== action.id) }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: action.qty } : i
        ),
      }
    }

    case 'SET_DAYS':
      return { ...state, days: action.days }

    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }

    case 'CLEAR':
      return { ...initialState }

    default:
      return state
  }
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const QuoteContext = createContext(null)

export function QuoteProvider({ children }) {
  const [state, dispatch] = useReducer(quoteReducer, initialState)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Hydrate from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        dispatch({ type: 'HYDRATE', payload: parsed })
      }
    } catch {
      // Ignore malformed data
    }
    setLoaded(true)
  }, [])

  // Persist to localStorage whenever quote state changes (after hydration)
  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ items: state.items, days: state.days, startDate: state.startDate })
      )
    } catch {
      // Storage may be unavailable (private browsing quota exceeded, etc.)
    }
  }, [state.items, state.days, state.startDate, loaded])

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  function addItem(item) {
    dispatch({ type: 'ADD_ITEM', item })
    setDrawerOpen(true)
  }

  function removeItem(id) {
    dispatch({ type: 'REMOVE_ITEM', id })
  }

  function updateQty(id, qty) {
    dispatch({ type: 'UPDATE_QTY', id, qty })
  }

  function setDays(days) {
    dispatch({ type: 'SET_DAYS', days })
  }

  function setStartDate(startDate) {
    dispatch({ type: 'SET_START_DATE', startDate })
  }

  function clearQuote() {
    dispatch({ type: 'CLEAR' })
  }

  const value = {
    items: state.items,
    days: state.days,
    setDays,
    startDate: state.startDate,
    setStartDate,
    drawerOpen,
    setDrawerOpen,
    loaded,
    addItem,
    removeItem,
    updateQty,
    clearQuote,
  }

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) {
    throw new Error('useQuote must be used within a QuoteProvider')
  }
  return ctx
}
