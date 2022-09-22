import axios from 'axios';
import React from 'react'
import Layout from '../../components/Layout'

const UserId = ({ user }) => {
  return (
    <Layout>
      <div className='container'>
        <h1>User Details Page</h1>
        <p><strong>User Id : </strong> {user.id}</p>
        <p><strong>User Name :</strong> {user.name}</p>
        <p> <strong>User Email :</strong> {user.email}</p>
        <p> <strong>User Phone :</strong> {user.phone}</p>
      </div>
    </Layout>
  )
}

export default UserId;

export async function getServerSideProps(context) {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`);
    return {
      props: {
        user: data,
      }
    };
  } catch (err) {
    console.log(err);
  }
}