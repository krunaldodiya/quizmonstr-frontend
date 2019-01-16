import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  getAuthUser: dispatch.auth.getAuthUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
