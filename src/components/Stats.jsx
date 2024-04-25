export default function Stats({ items }) {

    if (!items.length) {
        return (
            <footer className="stats">
                <em>
                    Start adding some items
                </em>
            </footer>
        )
    }

    const numItems = items.length;
    const itemsPacked = items.filter((item) => item.packed).length
    const percentage = Math.round((itemsPacked / numItems) * 100)

    return (
        <footer className="stats">

            <em>
                {percentage === 100 ? "You have everything! ready to go! ✈" :
                    `💼 You have ${numItems} items on your list, and you already packed ${itemsPacked} (${percentage})%`}
            </em>
        </footer>
    )
}