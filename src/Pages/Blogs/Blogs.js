import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='row my-5'>
                <h3>Difference between javascript and nodejs</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>

                            <th scope="col">Javascript</th>
                            <th scope="col">Node JS</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>It is a programming language. It works in any browser that has a proper browser engine.</td>
                            <td>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</td>


                        </tr>
                        <tr>

                            <td>It is generally used on the client-side server.</td>
                            <td>It is generally used on the server-side.</td>


                        </tr>
                        <tr>

                            <td>JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.</td>
                            <td>Node JS is only supported by the V8 engine, which Google Chrome mostly uses.</td>


                        </tr>
                        <tr>

                            <td>It is designed to build network-centric applications.</td>
                            <td>It's designed for data-intensive real-time applications that run on several platforms.</td>


                        </tr>
                        <tr>

                            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                            <td>Nodejs does not have capability to add HTML tags.</td>


                        </tr>

                    </tbody>
                </table>
                <h3> When should you use nodejs and when should you use mongodb?</h3>
                <p className='text-justify'><b>Node JS: </b><br />


                    It runs Javascript, so we can use the same language on server and client, and even share some code between them (e.g. for form validation, or to render views at either end.)
                    <br />
                    The single-threaded event-driven system is fast even when handling lots of requests at once, and also simple, compared to traditional multi-threaded Java or ROR frameworks.
                    <br />
                    It has become the defacto standard environment in which to run Javascript-related tools and other web-related tools, including task runners, minifiers, beautifiers, linters, preprocessors, bundlers and analytics processors.
                    <br />
                    It seems quite suitable for prototyping, agile development and rapid product iteration.
                    <br />
                    <b>MongoDB: </b><br />
                    MongoDB is a general-purpose database used in various ways to support applications in many different industries (e.g., telecommunications, gaming, finances, healthcare, and retail). <br />
                    Typical use cases for MongoDB include: <br /><br />
                    Integrating large amounts of diverse data <br />
                    Describing complex data structures that evolve <br />
                    Delivering data in high-performance applications <br />
                    Supporting hybrid and multi-cloud applications <br />
                    Supporting agile development and collaboration

                </p>
                <h3>Differences between sql and nosql databases</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>

                            <th scope="col">SQL</th>
                            <th scope="col">NoSQL</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>


                        </tr>
                        <tr>

                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.</td>


                        </tr>
                        <tr>

                            <td>These databases are best suited for complex queries</td>
                            <td>These databases are not so good for complex queries</td>


                        </tr>
                        <tr>

                            <td>Vertically Scalable</td>
                            <td>Horizontally scalable</td>


                        </tr>
                        <tr>

                            <td>Follows ACID property</td>
                            <td>Follows CAP(consistency, availability, partition tolerance)</td>


                        </tr>

                    </tbody>
                </table>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p><b>JWT: </b><br />
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br />
                    <b>How it works:</b> <br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. <br />
                    Once decoded, you will get two JSON strings:<br />

                    1.The header and the payload.<br />
                    2. The signature. <br />

                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  <br />
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. <br />
                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>

        </div>
    );
};

export default Blogs;