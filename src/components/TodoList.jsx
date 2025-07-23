export default function TodoList() {

    let todoList = [
        'Task 1',
        'Task 2',
        'Task 3'
    ]

    return (
        <ul className="main">
            {todoList.map((item, index) => {
                return (
                    <li className="todoItem" key={index}>
                        {item}
                        <i class="fa-solid fa-pen-to-square"></i>
                    </li>
                )
            })}
        </ul>
    )
}
