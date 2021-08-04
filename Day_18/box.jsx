import './index.css'


function box () {
    let csn;
    return (
        [...Array(49)].map((element, index) => {
            csn= index%2==0? 'boxw':'boxb';
            return  (
                <span className= {csn} >
                    
                </span>
            );
        } )
    )
    
} 
export default box;