import { NextPage } from 'next';
import frontImage from '../public/images/Screenshot_1.png';
import arrowIcon from '../public/icons/icons8-ordenar-para-a-direita-64.png';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center ">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={frontImage.src} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Technical Test - Victor Alexandre</h2>
          <p className="mb-8">
            This project is a technical test for the selection process of the
            company HeMakes - IT Happens
          </p>
          <div className="card-actions justify-center">
            <Link href="/users/list">
              <button className="btn btn-primary">
                Start Now
                <img src={arrowIcon.src} alt="" className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
