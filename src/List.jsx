function List() {
    // ✅ Fruits array with id, name, color, and calories
    const fruits = [
        { id: 1, name: "Apple", color: "Red", calories: 52 },      
        { id: 2, name: "Banana", color: "Yellow", calories: 96 },
        { id: 3, name: "Orange", color: "Orange", calories: 47 },
        { id: 4, name: "Mango", color: "Golden Yellow", calories: 60 },
        { id: 5, name: "Pineapple", color: "Brown/Yellow", calories: 50 },
        { id: 6, name: "Grapes", color: "Purple/Green", calories: 69 },
        { id: 7, name: "Strawberry", color: "Red", calories: 33 }
    ];

    // ✅ Vegetables array with id, name, color, and calories
    const vegetables = [
        { id: 1, name: "Carrot", color: "Orange", calories: 41 },
        { id: 2, name: "Broccoli", color: "Green", calories: 34 },
        { id: 3, name: "Spinach", color: "Green", calories: 23 },
        { id: 4, name: "Tomato", color: "Red", calories: 18 },
        { id: 5, name: "Cucumber", color: "Green", calories: 16 },
        { id: 6, name: "Bell Pepper", color: "Red/Yellow/Green", calories: 31 },
        { id: 7, name: "Potato", color: "Brown", calories: 77 }
    ];

    // ✅ Reusable function to render a list (Fruits OR Vegetables)
    // items → the array (fruits/vegetables)
    // category → the title (string: "Fruits" or "Vegetables")
    const renderList = (items, category) => (
        <div className="list-card">
            <h2 className="list-title">{category}</h2>
            <ol className="list-container">
                {items.map(item => (
                    // Each item needs a unique "key" (using id here)
                    <li key={item.id} className="list-item">
                        <span className="item-name">{item.name}</span> : &nbsp;
                        <b className="item-color">{item.color}</b>
                    </li>
                ))}
            </ol>
        </div>
    );

    return (
        <div className="list-wrapper">
            {/* ✅ Only render fruits if the array is NOT empty */}
            {fruits.length > 0 && renderList(fruits, "Fruits")}

            {/* ✅ Only render vegetables if the array is NOT empty */}
            {vegetables.length > 0 && renderList(vegetables, "Vegetables")}
        </div>
    );
}

export default List;
