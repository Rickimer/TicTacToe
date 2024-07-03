const Square1 = ({value, handleClick, index}) =>
{
    const styles = {
        button: {
            width: '180px',
            height: '180px',
            fontSize: '46px'
        }


    }
    //стрелочная функция вызывается, чтобы не вызывалась в первый раз при рендере компонента, а только по нажатию
    return (
        <button style={styles.button} onClick={()=>handleClick(index)}>
            {value}
        </button>
    )
}

export default Square1;