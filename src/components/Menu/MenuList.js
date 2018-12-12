import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from './Menu';

const styles = theme => ({
  root: {
    // width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 280,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
    textAlign: 'left',
    // textSize: 20, ??
  },
  ListSubheader: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.87)'
  }
});

const MenuList = ({classes, products, categories, onScroll, onClick}) => (
  <List className={classes.root} subheader={<li/>} onScroll={() => onScroll('11')}>
    {categories.map(category => (
      <li key={category.categoryId} className={classes.listSection} id={`tab_${category.categoryId}`}>
        <ul className={classes.ul}>
          <ListSubheader className={classes.ListSubheader}>{category.categoryName}</ListSubheader>
          {products
            .filter(item => item.categoryId === category.categoryId)
            .map(item => (
              <Menu product={item} key={item.productId} onClick={onClick}/>
            ))}
        </ul>
      </li>
    ))}
  </List>
);

export default withStyles(styles)(MenuList);