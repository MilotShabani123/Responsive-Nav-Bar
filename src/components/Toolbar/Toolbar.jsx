import './Toolbar.css'
import DrawerToggelButton from './SideDrawer/DrawerToggelButton';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className='toolbar-toggel_button'>
                <DrawerToggelButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a herf="/">The Logo</a></div>
            <div className='spacer'/>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Products</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;