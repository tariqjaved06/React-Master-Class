function horsepower(kw) {
    return kw * 1.36;
}

function Car() {
       return(
        <>
        <h1>My Car</h1>
        <p>It has {horsepower(217)} horsepower</p>
        </>
    );
}

export default Car