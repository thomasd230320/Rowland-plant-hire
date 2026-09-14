'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { searchProducts } from '@/utils/search'
import { SEARCH_INDEX } from '@/data/searchIndex'

const POPULAR = ['breaker', 'digger', 'mixer', 'scaffold', 'saw', 'drill', 'compactor', 'dumper']

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function CloseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
    </svg>
  )
}

function ToolIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function GasIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2h4v3h-4z"/>
      <path d="M8 5h8a0 0 0 0 1 0 0v2a4 4 0 0 1-1 2.6V19a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V9.6A4 4 0 0 1 8 7V5z"/>
    </svg>
  )
}

function PlantIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <path d="M16 8h4l3 5v3h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    // Focus input after mount
    const t = setTimeout(() => inputRef.current?.focus(), 50)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }
    setResults(searchProducts(query, SEARCH_INDEX))
  }, [query])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    // Prevent background scroll
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handlePopular = useCallback((term) => {
    setQuery(term)
    inputRef.current?.focus()
  }, [])

  const showPopular = query.trim().length < 2
  const noResults = query.trim().length >= 2 && results.length === 0

  return (
    <div className="search-overlay" role="dialog" aria-label="Search equipment" aria-modal="true">
      {/* Backdrop */}
      <div className="search-overlay__backdrop" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div className="search-overlay__panel">
        {/* Input bar */}
        <div className="search-overlay__header">
          <div className="search-overlay__input-wrap">
            <span className="search-overlay__icon"><SearchIcon /></span>
            <input
              ref={inputRef}
              type="search"
              className="search-overlay__input"
              placeholder="Search equipment… e.g. digger, breaker, scaffold"
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoComplete="off"
              spellCheck="false"
              aria-label="Search equipment"
            />
            {query && (
              <button
                className="search-overlay__clear"
                onClick={() => { setQuery(''); inputRef.current?.focus() }}
                aria-label="Clear search"
              >
                <CloseIcon size={16} />
              </button>
            )}
          </div>
          <button className="search-overlay__close" onClick={onClose} aria-label="Close search">
            <CloseIcon size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="search-overlay__body">

          {/* Popular searches (shown when idle) */}
          {showPopular && (
            <div className="search-popular">
              <p className="search-popular__label">Popular searches</p>
              <div className="search-popular__chips">
                {POPULAR.map(term => (
                  <button key={term} className="search-chip" onClick={() => handlePopular(term)}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {noResults && (
            <div className="search-empty">
              <p className="search-empty__msg">No results for <strong>&ldquo;{query}&rdquo;</strong></p>
              <p className="search-empty__hint">
                Try: breaker, digger, mixer, scaffold, saw, drill, dumper
              </p>
            </div>
          )}

          {/* Results */}
          {results.length > 0 && (
            <>
              <p className="search-results__count">
                {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </p>
              <ul className="search-results-list" role="listbox">
                {results.slice(0, 12).map(result => (
                  <li key={result.id} role="option">
                    <Link
                      href={result.url}
                      className="search-result"
                      onClick={onClose}
                    >
                      <div className="search-result__img" aria-hidden="true">
                        {result.image ? (
                          <Image
                            src={result.image}
                            alt=""
                            fill
                            sizes="64px"
                            className="search-result__photo"
                          />
                        ) : (
                          <div className="search-result__img-placeholder" />
                        )}
                      </div>
                      <div className="search-result__body">
                        <span className={`search-result__type search-result__type--${result.type}`}>
                          {result.type === 'gas' ? <GasIcon />
                            : result.type === 'plant' ? <PlantIcon />
                            : <ToolIcon />}
                          {result.type === 'gas' ? 'Gas Bottles'
                            : result.type === 'plant' ? 'Plant Hire'
                            : 'Tool Hire'}
                        </span>
                        <p className="search-result__title">{result.title}</p>
                        <p className="search-result__cat">{result.categoryLabel}</p>
                        {result.pricing?.day1 && (
                          <p className="search-result__price">
                            {result.type === 'gas' ? (
                              <><strong>{result.pricing.day1}</strong> per bottle</>
                            ) : (
                              <>from <strong>{result.pricing.day1}</strong>/day</>
                            )}
                          </p>
                        )}
                      </div>
                      <span className="search-result__arrow"><ArrowIcon /></span>
                    </Link>
                  </li>
                ))}
              </ul>
              {results.length > 12 && (
                <p className="search-results__more">
                  Showing 12 of {results.length} — try a more specific search
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
