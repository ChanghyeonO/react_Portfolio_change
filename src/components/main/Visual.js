
export default function Visual() {
    return (
        <div>
            <h1>TRAVEL TIME</h1>
            <p>
                Bon't let the loud noise scare you,<br/>
                Let the rhythms of the dance amuse you.<br/>
                You are given a very rare chance<br/>
                Feel the movement of our ancestors
            </p>
        </div>

        <figure id="visual" className='myScroll'>
            <video src={process.env.PUBLIC_URL + '/img/vid3.mp4'} loop autoPlay muted></video>     
        </figure>
    )
}