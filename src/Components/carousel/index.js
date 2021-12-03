import { useEffect, useState } from 'react';
import './style.sass';

const Carousel = () => {
    const contentCarousel = [
        {
            id: 1,
            images: '/assets/Data.png',
            title: 'Marcenas mattis egestas',
            description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.'
        },

        {
            id: 2,
            images: '/assets/Data.png',
            title: 'Marcenas mattis egestas',
            description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.'
        },

        {
            id: 3,
            images: '/assets/Data.png',
            title: 'Marcenas mattis egestas',
            description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.'
        },
        
        {
            id: 4,
            images: '/assets/Data.png',
            title: 'Marcenas mattis egestas',
            description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.'
        }
    ];

    const [selector, setSelector] = useState(0);
    

    useEffect(() => {
        if (selector === contentCarousel.length - 1){
            setTimeout(() => {
                setSelector(0);
            }, 4000);
        } else {
            setTimeout(() => {
                setSelector(selector + 1);
            }, 4000);            
        }
    },[selector])
    return (
        <>
            <div class="container first-half align-center">
                <div class="carousel d-flex animation" style={{transform: `translateX(${-100 * selector}%)`}}>
                    {contentCarousel.map((item) => {
                        return (
                        <>
                        <div key={item.id} class="items"><img class="img-carousel" src={item.images} alt="data-img"/>
                            <div class="container-carousel">
                                <div class="div-texts">
                                    <p class="title-img">{item.title}</p>
                                    <p class="sub-title-img">{item.description}</p>
                                </div>
                            </div>
                        </div>
                        </>
                        )
                    })}
                </div>

                <div class="div-selector">
                    {contentCarousel.map((p, index)=> {
                        return (
                            <div onClick={() => {
                                setSelector(index);                                
                            }} class={`${index===selector ? 'selected' : 'not-selected'}`} ></div>
                        );
                    })} 
                </div>
            </div>
            {/* <input value={form.email} onChange={(value) => {setForm({...form,email: value.target.value}); console.log(form)}}></input>
            <input value={form.senha} onChange={(value) => {setForm({...form,senha: value.target.value}); console.log(form)}}></input>
            <button onClick={()=>{alert(JSON.stringify(form))}}></button> */}
        </>
    );
}

export default Carousel;