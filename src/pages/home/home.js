import './home.css';
import lady from '../../images/hmm.png'
import testimonials from '../../images/testimonials.png'
import { useEffect } from 'react';

export default function Home() {

    function scrollToContent() {
        var elem = document.getElementById('content');
        elem.scrollIntoView();
    }

    function hideAutoScroller() {
        const auto = document.getElementById('autoscroll');
        const hook = document.getElementsByClassName('hook')[0];

        const observer = new IntersectionObserver(entries => {
            auto.classList.toggle('anim', entries[0].isIntersecting);
        })

        observer.observe(hook);
    }

    function toggleCatchAnimLeft() {
        const left = document.getElementById('catch-left');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                left.childNodes.forEach(child => {
                    child.classList.toggle('anim', entries[0].isIntersecting);
                })
            })
        })
        observer.observe(left);
    }

    function toggleCatchAnimRight() {
        const right = document.getElementById('catch-right');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const list = entry.target.firstChild;
                list.childNodes.forEach(child => {
                    child.classList.toggle('anim', entries[0].isIntersecting);
                })
            })
        })
        observer.observe(right);
    }

    function toggleContentAnim() {
        const content = document.getElementById('content');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.childNodes.forEach(child => {
                    child.classList.toggle('anim', entries[0].isIntersecting);
                })
            })
        })

        observer.observe(content);
    }

    useEffect(() => {
        hideAutoScroller();
        toggleContentAnim();
        toggleCatchAnimLeft();
        toggleCatchAnimRight();
    }, []);

    return (
        <div className="home px-4 py-5">

            <div className='who-i-am'>
                <div className='greet display-2 greet-anim' id='greet'>Hi...</div>
                <div className='name display-2 name-anim' id='name'>My Name is Warren West...</div>
            </div>

            <div className="hook">
                <div className="title display-3">
                    If You Want...
                </div>
                <ul className="list">
                    <li className="item-1 display-6">
                        More Time...
                    </li>
                    <li className="item-2 display-6">
                        More Flexibility...
                    </li>
                    <li className="item-3 display-6">
                        More Money...
                    </li>
                </ul>

                <h3 className='footer-btn py-4' id='autoscroll' onClick={() => scrollToContent()}>
                    <button className='scrollToContent py-2'>
                            &#8595; Let Me Show You How &#8595;
                    </button>
                </h3>
            </div>

            <div className="content container py-4 my-4" id='content'>
                <h2 className="gig py-4">
                    My course, "Get My First Gig", will show you the simple steps I used to make $70,400 in my <span className='wow'>FIRST YEAR</span> as a freelancer in 2022... <br></br>
                    <span className='hooker'>all while working less than 20 hours a week, with time to spend with my family and live my best life.</span>
                </h2>

                <div className="signup container">
                    <div className="email-form">
                        <input type='email' id='email' placeholder='Email'></input>
                    </div>
                    <div className="confirm container">
                        <button className='buttn p-3'>Join the WaitList</button>
                    </div>
                </div>

                <div className="reviews py-4">
                    <div className='image-container'>
                        <img src={testimonials} alt='testimonials'></img>
                    </div>
                </div>

                <div className='social-media'></div>
            </div>

            <div className="catch container">
                <div className="left" id='catch-left'>
                    <div className='msg1 display-2'>So...</div>
                    <div className='msg2 display-2'>Why freelancing?</div>
                    <div className='image-1'>
                        <img className='img-fluid' src={lady} alt='cartoon'></img>
                    </div>
                </div>
                <div className="right" id='catch-right'>
                    <ul className='list-2'>
                        <li className='item'>
                            Make money, from a couple hundred bucks a month to thousands of dollars a month.
                        </li>
                        <li className='item'>
                            You can work from anywhere in the world, even if you are from a small country with limited opportunities.
                        </li>
                        <li className='item'>
                            You can also work from your house, the beach, coffee shop.
                        </li>
                        <li className='item'>
                            You have flexibility. Work when you want, and don’t work when you don’t want.
                        </li>
                        <li className='item'>
                            You're your own boss. There's no clocking in and out for lunch, no asking for the afternoon off.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}