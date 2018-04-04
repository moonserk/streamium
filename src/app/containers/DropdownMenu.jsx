class MyDropdownMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    showMenu(e){
        e.preventDefault()
        this.setState({showMenu: true}, () => document.addEventListener('click', this.closeMenu))
    }
    closeMenu(e){
        e.preventDefault()
        this.setState({showMenu: false}, () => document.removeEventListener('click', this.closeMenu))
    }

    render(){
        return(
            <div className="dropdown">
                <button className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.showMenu}>
                    Show menu
                </button>
                {this.state.showMenu ?
                (<div className="dropdown-menu-custom">
                    <div className="">
                            <div className="col-auto mr-auto">
                            {/* <div className=""> */}
                                <img className="rounded-circle menu-name-avatar" style={{height: '68px', weight: '68px'}} src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} alt="user avatar" />
                            {/* </div> */}
                            </div>
                        </div>
                        <div className=" menu-name-upper">
                        </div>
                        <div className=" menu-name-lower">
                            {/* <span className="col-auto row" style={{marginTop: "12px"}}><b>Joey Tribiani</b></span>
                            <span className="col-auto row" style={{marginTop: "25px", marginRight: "43px"}}>2.5K</span> */}
                        </div>
                    <div className="dropdown-item">Item 1</div>
                    <div className="dropdown-item">Item 2</div>
                    <div className="dropdown-item">Item 3</div>
                </div>) :
                (null)}
            </div>
        )

    }
}