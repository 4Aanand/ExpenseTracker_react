
export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  setExpense,
  expenses,
  setEditingRowId,
  rowId,
}) {
if (!menuPosition.left && !menuPosition.top) return null
console.log(menuPosition);
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          const { title, category, amount, name  } = expenses.find(
            (expense) => expense.id === rowId
          )
          setEditingRowId(rowId)
          setExpense({ title, category, amount ,name })
          setMenuPosition({})
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          )
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  )
}
