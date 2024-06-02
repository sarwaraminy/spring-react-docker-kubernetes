import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const SignUpPage = () => {
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        passwordHash: '',
        firstName: '',
        lastName: ''
    });

    const handleFormChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const apiServer = process.env.REACT_APP_API_SERVER;

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiServer}/auth/signup`, formData);
            setSuccessMessage(`<font color="green">User added Successfully: ${response.data.email}</font>`);
            setFormData({ email: '', passwordHash: '', firstName: '', lastName: '' });
        } catch (error) {
            setErrorMessage(`<font color="red">Error adding User: ${error.response.data.message || error.message}</font>`);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card md-6">
                        <div className="card-header text-center">
                            <h3>Sign Up Page</h3>
                        </div>
                        {errorMessage && <div className="alert alert-danger" dangerouslySetInnerHTML={{ __html: errorMessage }}></div>}
                        <div className="col-md-8" dangerouslySetInnerHTML={{ __html: successMessage }}></div>
                        <div className="card-body">
                            <form id="registerUser" onSubmit={registerUser}>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" id="email" placeholder="someone@someemail.com"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordHash">Password</label>
                                    <input type="password" className="form-control" id="passwordHash" placeholder="password"
                                        value={formData.passwordHash}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="password"
                                        value={confirmPasswordValue}
                                        onChange={e => setConfirmPasswordValue(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input className="form-control" id="firstName" placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input className="form-control" id="lastName" placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <button className="btn btn-primary btn-block"
                                    type="submit"
                                    disabled={!formData.email || !formData.passwordHash || formData.passwordHash !== confirmPasswordValue}
                                >
                                    Sign Up
                                </button>
                                <button className="btn btn-primary btn-block"
                                    type="button"
                                    onClick={() => navigate("/login")}
                                >
                                    Already have an account? Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
