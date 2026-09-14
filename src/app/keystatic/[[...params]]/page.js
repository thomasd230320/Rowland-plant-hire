'use client'
import { makePage } from '@keystatic/next/ui/app'
import config from '../../../../keystatic.config'

// The admin panel Rowland uses to edit the site. Sits outside the (site) route
// group so it renders without the shop navigation wrapped around it.
export default makePage(config)
