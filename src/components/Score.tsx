import { ReactElement } from 'react'

interface Props {
    score: number;
    total: number;
    result: boolean;
}


export default function Score({ score, total, result }: Props): ReactElement {

    return (
        <div>
            <div>
                {score} / {total}
            </div>
            { result && <div>
                {(score / total) * 100} %
            </div>}
        </div>
    )
}
