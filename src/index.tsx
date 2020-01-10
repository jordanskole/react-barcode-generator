import React, { useEffect } from 'react'
import JsBarcode, { BaseOptions } from 'jsbarcode'

export type Props = {
  barcode: string;
  options: BaseOptions;
}

export const Barcode: React.FC<Props> = ({ barcode, options }) => {
  useEffect(() => {
    JsBarcode('#barcode', barcode, {...options})
  })
  return (
    <svg id="barcode"></svg>
  )
}
