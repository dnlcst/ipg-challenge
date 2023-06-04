/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import Slider from "react-slick"
import { Roboto_Condensed } from 'next/font/google'
const robotoCondensed = Roboto_Condensed({ weight: '700', subsets: ['latin'] })

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <img
      onClick={onClick}
      className="slick-next"
      alt=""
      src='data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTQuNTIzIDE4Ljc4N3M0LjUwMS00LjUwNSA2LjI1NS02LjI2Yy4xNDYtLjE0Ni4yMTktLjMzOC4yMTktLjUzcy0uMDczLS4zODMtLjIxOS0uNTNjLTEuNzUzLTEuNzU0LTYuMjU1LTYuMjU4LTYuMjU1LTYuMjU4LS4xNDQtLjE0NS0uMzM0LS4yMTctLjUyNC0uMjE3LS4xOTMgMC0uMzg1LjA3NC0uNTMyLjIyMS0uMjkzLjI5Mi0uMjk1Ljc2Ni0uMDA0IDEuMDU2bDQuOTc4IDQuOTc4aC0xNC42OTJjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE0LjY5MmwtNC45NzkgNC45NzljLS4yODkuMjg5LS4yODYuNzYyLjAwNiAxLjA1NC4xNDguMTQ4LjM0MS4yMjIuNTMzLjIyMi4xOSAwIC4zNzgtLjA3Mi41MjItLjIxNXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=='
    />
  )
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <img
      onClick={onClick}
      className="slick-prev"
      alt=""
      src='data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40NzQgNS4yMDlzLTQuNTAxIDQuNTA1LTYuMjU0IDYuMjU5Yy0uMTQ3LjE0Ni0uMjIuMzM4LS4yMi41M3MuMDczLjM4NC4yMi41M2MxLjc1MiAxLjc1NCA2LjI1MiA2LjI1NyA2LjI1MiA2LjI1Ny4xNDUuMTQ1LjMzNi4yMTcuNTI3LjIxNy4xOTEtLjAwMS4zODMtLjA3NC41My0uMjIxLjI5My0uMjkzLjI5NC0uNzY2LjAwNC0xLjA1N2wtNC45NzYtNC45NzZoMTQuNjkyYy40MTQgMCAuNzUtLjMzNi43NS0uNzVzLS4zMzYtLjc1LS43NS0uNzVoLTE0LjY5Mmw0Ljk3OC00Ljk3OWMuMjg5LS4yODkuMjg3LS43NjEtLjAwNi0xLjA1NC0uMTQ3LS4xNDctLjMzOS0uMjIxLS41My0uMjIxLS4xOTEtLjAwMS0uMzguMDcxLS41MjUuMjE1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+'
    />
  )
}

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://64796bb8a455e257fa632e2a.mockapi.io/api/v1/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    }
    fetchTestimonials();
  });

  return (
    <Slider {...settings}>
      { testimonials.map((testimonial: any) => (
        <div className="slider-item" key={testimonial.id}>
          <div>
            <img className="avatar" alt={testimonial.name} src={testimonial.avatar} />
            <h4 className={robotoCondensed.className}>{testimonial.name}</h4>
            <div className="description">{testimonial.description}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;