import React from 'react'
import useLanguage from './useLanguage'

const NotFound = () => {
  const { t } = useLanguage();
  
  return (
    <div>{t("not_found")}</div>
  )
}

export default NotFound