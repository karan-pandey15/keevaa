// pages/shippinganddelivery.js
import Footer from '@/app/components/footer/page';
import Navbar from '@/app/components/navbar/page';
import Head from 'next/head';

const ShippingAndDelivery = () => {
  return (
    <>
    <Navbar />
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '20px',
      maxWidth: '800px',
      margin: '60px auto',
      lineHeight: '1.6'
    }}>
      <Head>
        <title>Shipping and Delivery Policy</title>
        <meta name="description" content="Shipping and Delivery Policy of our service." />
      </Head>
      <main> 
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Shipping and Delivery Policy</h1>
        <section style={{ marginBottom: '20px' }}>
          <h2>Shipping Policy</h2>
          <p>
            We offer shipping to various locations. Orders are processed within 1-2 business days. Once your order has been shipped, you will receive an email with the tracking information.
          </p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2>Delivery Times</h2>
          <p>
            Delivery times vary based on your location. Typically, delivery takes between 3-7 business days. Please note that during peak seasons or holidays, delivery times may be longer.
          </p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2>International Shipping</h2>
          <p>
            We do offer international shipping. Delivery times and shipping costs for international orders vary based on the destination. Additional customs fees or import taxes may apply.
          </p>
        </section>
      </main> 
    </div>
    <Footer />
    </>
  );
};

export default ShippingAndDelivery;
