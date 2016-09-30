'use strict'

class LoginForm extends React.Component {
  constructor(){
    super()

    this.state = {
      username:'',
      password:''
    }
  }

  _handleSubmit(e){
    e.preventDefault();
    let data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this._postLogin(data);
  }

  _postLogin(data){
    $.post('/auth/login', data)
      .done( results => {
        if(results.message){
          console.log(results);
          ReactDOM.render(<ShowUser user = {results.user} />, document.getElementById('app'));
        }
      })
  }

  render(){
    return (
      <section>
        <h1 className="text-center">User Login</h1>

        <form action="/auth/login" method="post" className="form col-md-8 col-md-offset-2"
          onSubmit={this._handleSubmit.bind(this)}>
          <fieldset className="form-group">
            <label>Username</label>
            <input type="text" name="username" className="form-control"/>
          </fieldset>
          <fieldset className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control"/>
          </fieldset>
          <fieldset className="form-group">
            <button type="submit" className="btn btn-primary form-control">Login</button>
          </fieldset>
          <div className="form-group">
            <a href="" className="btn btn-success form-control">Click here to register!</a>
          </div>
          <div className="form-group">
            <a href="" className="btn black-background form-control"><i className="fa fa-github-alt" aria-hidden="true"></i> Sign In with GitHub!</a>
          </div>
        </form>
      </section>
    )
  }
}

class ShowUser extends React.Component {
  constructor(){
    super()

    this.state = {
      user:{},
      username:'',
      email:'',
      about_me:'',
      profile_url:'',
    }
  }

  _getUser(){
    $.ajax({
      method:'GET',
      url:'/auth/user'
    }).done( results => {
      console.log(results);
    });

  }

  componentWillMount(){
    let u = this.props.user;

    this.setState({
      user: u
      username:u.username,
      email:u.email,
      about_me:u.about_me,
      profile_url:u.profile_url
    });

  }

  render(){
    return (
      <section className="row">
        <div className="col-md-6 profile">
          <h1>{this.state.username}</h1>
          <p>{this.state.about_me}</p>
          <button className="btn btn-success">Edit Profile</button>
          <button className="btn btn-warning">Logout</button>
        </div>
        <div className="col-md-6">
          <img className="img-circle pull-right " src={this.state.profile_url} width="75%"/>
        </div>

        </section>
    )
  }
}

class EditUser extends React.Component {
  render(){
    <section>
      <form action="user/user_id?_method:PUT" method="POST" className="form">
        <fieldset className="form-group">
          <label>Change Username</label>
          <input type="text" className="form-control" value={this.state.username} />
        </fieldset>
        <fieldset className="form-group">
          <label>Change Username</label>
          <input type="text" className="form-control" value={this.state.username} />
        </fieldset>
      </form>
    </section>
  }
}

ReactDOM.render(<LoginForm />, document.getElementById('app'));
