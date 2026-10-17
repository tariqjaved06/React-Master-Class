function Football() {
    const shoot = (message , event ) => alert(event.type)
    return <button onClick={(event) => shoot("Goal!" , event )}>Take the Shoot</button>
}
export default Football