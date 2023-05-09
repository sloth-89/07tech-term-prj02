import dummy from "../db/data.json"

export default function Day (){

    const inputday = 3;
    const wordList = dummy.words.filter(word => (word.day === inputday))
    // wordList는 filter 함수로 day가 3인 요소들을 담은 배열집합
    // words 배열집합을 filter로 재가공한 또 다른 배열집합
    return(
        <>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}