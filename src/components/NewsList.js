import React from 'react';

export default function NewsList({news}) {
    // console.log(news);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Comments</th>
                        <th>Vote Count</th>
                        <th>Up Vote</th>
                        <th>News Details</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map(p => (
                        <tr key={p.created_at}>
                            <td>{p.num_comments}</td>
                            <td>{p.points}</td>
                            <td><a href="#">&#5123;</a></td>
                            <td>{p.title}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
