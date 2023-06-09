import './index.css'

const TabItem = props => {
  const {tab, onTabId, isActive} = props
  const {displayText, tabId} = tab
  const colorId = isActive ? 'color' : ' '

  const onTabSwitch = () => {
    onTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${colorId}`}
        onClick={onTabSwitch}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
