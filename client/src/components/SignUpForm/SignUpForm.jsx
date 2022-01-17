

function SignUpForm(redirectAfterSignUp) {


    return (
        <>
            <h1>This is Sign Up Form Component</h1>


        <form data-toggle="validator" role="form" style={{padding: '20px 80px 0px 80px'}}>
            <div className="form-group">
                <label for="inputName" className="control-label">Username</label>
                <input type="text" className="form-control" id="inputName" placeholder="Cina Saffary" required />
            </div>

            <div className="form-group">
                <label for="inputEmail" className="control-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required/>
                <div className="help-block with-errors"></div>
            </div>

            <div className="form-group">
                <label for="inputPassword" className="control-label">Password</label>
                <div className="form-inline row">
                <div className="form-group col-sm-6">
                    <input type="password" data-minlength="6" className="form-control" id="inputPassword" placeholder="Password" required/>
                    <div className="help-block">Minimum of 6 characters</div>
                </div>
                <div className="form-group col-sm-6">
                    <input type="password" className="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required/>
                    <div className="help-block with-errors"></div>
                </div>
                </div>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>


        </>
    )
}

export default SignUpForm