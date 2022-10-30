import { useEffect, useState } from "react";
import { Member1, Member2, Member3, Member4, Member5 } from '../../asset/index'


const Posts = [
    { title: 'HELLO5', content: 'Here comes description in details', imageSrc: Member1},
    { title: 'HELLO4', content: 'Here comes description in details', imageSrc: Member2},
    { title: 'HELLO3', content: 'Here comes description in details', imageSrc: Member3},
    { title: 'HELLO2', content: 'Here comes description in details', imageSrc: Member4},
    { title: 'HELLO1', content: 'Here comes description in details', imageSrc: Member5},
];

function News() {
    return (
        <main id="news" className='myScroll'>
            <h1>POPULAR TOUR</h1>
            <h2>There will be a small title here</h2>
            {Posts.map(({ title, content, imageSrc}) =>
                (
                    <article key={title}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <img src={imageSrc} alt="ddd" style={{
                            width: "100%",
                            height: "199px",
                            objectFit: "fill"
                        }}/>
                    </article>
                )
            )}
        </main>
    );
}
export default News;