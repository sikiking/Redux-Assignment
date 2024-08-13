
import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    return (
<>
      <Layout>

        <h1 className='text-center text-3xl'>We Have Total <span className='text-red-700'> 400 </span> Books</h1>
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-4"> <span className='text-red-700'>About Us </span></h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to our book store! We are passionate about providing the best books to our readers. Our goal is to offer a wide range of books that cater to all tastes and preferences. From bestsellers to hidden gems, we strive to make sure that every book lover finds something they love.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> <span className='text-blue-700'>Our Mission </span></h2>
                <p className="text-lg text-gray-700 mb-6">
                    Our mission is to create a community of readers who can discover, enjoy, and share their love for books. We believe in the power of literature to inspire, educate, and entertain. We are committed to offering excellent customer service and making your book-buying experience as enjoyable as possible.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> <span className='text-green-700'>Contact Us </span></h2>
                <p className="text-lg text-gray-700">
                    If you have any questions or feedback, feel free to reach out to us at <a href="#" className="text-blue-500 hover:underline">support@example.com</a>.
                </p>
            </div>
        </div>
        </Layout>

        </>
    );
};

export default About;