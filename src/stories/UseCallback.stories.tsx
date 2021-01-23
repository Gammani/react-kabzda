import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "HLikeUseCallback"
}

export const HLikeUseCallback = () => {
    console.log("HLikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [books])

    const memoizedAddBook = useMemo(() => {
            return () => {
                console.log(books);
                const newAddBook = [...books, "Angular" + new Date().getTime()]
                setBooks(newAddBook);
            }
        }, [books]
    );

    const memoizedAddBook2 = useCallback(() => {
            console.log(books);
            const newAddBook = [...books, "Angular" + new Date().getTime()]
            setBooks(newAddBook);
        }, [books]
    );

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}

const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log("BooksSecret");
    return <div>
        <button onClick={() => {
            props.addBook()
        }}>add User
        </button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }</div>
}
const Book = React.memo(BooksSecret);