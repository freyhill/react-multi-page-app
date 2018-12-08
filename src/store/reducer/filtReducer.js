const fiterState = (state="SHOW_ALL",action) => {
	return action.type?action.type:state;
};
export default fiterState;
