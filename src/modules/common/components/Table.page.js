import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom'

class TableComponent extends Component{
    render(){

        const data = [{
            id: '108816',
            name: 'Tanner Linsley',
            age: 26,
            roll: 'Marketing Executive',
            country: 'UAE, KSA',
            action: '--'
          }]
         
          const columns = [{
            Header: 'HYKY USER ID',
            accessor: 'id' // String-based value accessors!
          },{
            Header: 'FULL NAME',
            accessor: 'age'
          },{
            Header: 'ROLE',
            accessor: 'roll'
          },{
            Header: 'COUNTRY',
            accessor: 'country'
          },{
            Header: '',
            accessor: 'action',
            Cell: props => <Link to="/create-user">
                  <span className="action-btn"><AiFillEdit /></span>
              </Link> // Custom cell components!
          }
        ]

        return(
            <div className={this.props.className}>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={data.length}
                    showPagination={false}
                />
            </div>
        );
    }
}

export const Table = styled(TableComponent)`
    .ReactTable .rt-thead .rt-tr {
        text-align: left;
        background-color: #f7f7f7;
    }
    .ReactTable .rt-thead.-header{
        box-shadow: none;
    }
    .ReactTable .rt-thead .rt-resizable-header{
        font-size: 14px;
        padding: 10px;
        color: #aaa;
    }
    .ReactTable .rt-tbody{
        font-size: 14px;
        color: #777;
    }
    .ReactTable .rt-tbody .rt-tr-group:nth-of-type(even){
        background-color: #f7f7f7;
    }
    .action-btn{
      color: #777;
      font-size: 20px;
    }
`;
