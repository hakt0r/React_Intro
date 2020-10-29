import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <div>
            Welcome to the source of all evil.
            <h2>Contents</h2>
            <ul>
                { Object.keys(props.list).map(
                    title => <li>
                                <Link to={`/article/${title}`}>
                                    {title}
                                </Link>
                            </li>
                ) }
            </ul>
        </div>
    )
}
