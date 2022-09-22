import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = ({ users }) => {
  const router = useRouter();
  return (
    <Layout>
      <div className='container'>
        <h1>All User List</h1>
      </div>

      <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={()=>{router.push(`/users/${user.id}`)}} className='btn btn-primary'>View</button> |
                    <button className='btn btn-warning'>Edit</button> |
                    <button className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Index;

export async function getStaticProps() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
      props: {
        users: data,
      }
    }
  } catch (err) {
    console.log(err);
  }
}