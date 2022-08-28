import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import { useDispatch } from "react-redux";
const Search = styled.div`
  width: 90%;
  margin: 0 auto;
  .input {
    width: 100%;
    position: relative;
    border-radius: 30px;
    border: solid 1px #333;
    &:focus-within {
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border: solid 1px #fff;
    }
    .textBox {
      width: 100%;
      background-color: transparent;
      font-size: 14px;
      line-height: 50px;
      border-radius: 30px;
      padding-left: 10px;
      border: none;
      position: relative;
      &:focus {
        outline: 0;
        background-color: #fff;
      }
      &::placeholder {
        color: #bfbfc5;
        font-size: 14px;
      }
    }
  }
  .dropdown {
    background-color: #fff;
    width: 100%;
    border: none;
    .film-items {
      border: solid 1px gray;
      border-radius: 10px;
      img {
        border-radius: 10px;
      }
      .admin-action {
      }
    }
  }
`;

const UserListContent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();
  const { listActive, placeholder } = props;
  const [search, setSearch] = useState("");
  const [listFilter, setListFilter] = useState(listActive);
  const handleChangeSearch = (e) => {
    const keyword = e.target.value;
    console.log(keyword);
    if (keyword !== "") {
      const results = listActive.filter((item) => {
        const fullname = String(`${item.firstName} ${item.lastName}`);
        return (
          String(fullname)
            .toUpperCase()
            .indexOf(e.target.value?.toUpperCase()) > -1
        );
      });
      if (results.length) {
        setListFilter(results);
      } else {
        setListFilter(null);
      }
    } else {
      setListFilter(listActive);
    }

    setSearch(keyword);
  };
  // const handleClickButton = (e) => {
  //   inputRef.current.value = e.target.innerHTML;

  //   setSearch(inputRef.current.value);
  //   setListFilter(null);
  //   sendLocationfromInput(inputRef.current.value);
  // };
  // console.log(search, listFilter);
  useEffect(() => {
    setListFilter(listActive);
  }, [listActive]);
  if (!listFilter || listFilter.length === 0) {
    return <h2>danh sách trống</h2>;
  }
  return (
    <Search>
      <div className="input my-4">
        <input
          type="search"
          onChange={handleChangeSearch}
          value={search}
          className="textBox"
          placeholder={placeholder}
          ref={inputRef}
        />
      </div>
      <div className="dropdown">
        {listFilter?.map((item, index) => {
          return (
            <div
              key={index}
              className="align-items-center w-100 d-flex film-items p-3 justify-content-between mb-2"
            >
              <span>{item.id}</span>
              <span>
                {item.firstName} {item.lastName}
              </span>
              <span>{item.phoneNumber}</span>
              <div className="admin-action d-flex flex-column">
                <div className="update-del ">
                  <button
                    onClick={() => {
                      navigate(`/update/${item.id}`);
                    }}
                    className="btn btn-outline-primary m-2"
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger m-2"
                    onClick={() => {
                      dispatch({ type: "form/deleteUser", payload: item.id });
                    }}
                  >
                    Delete
                  </button>
                </div>
                <UserDetails user={item} />
              </div>
            </div>
          );
        })}
      </div>
    </Search>
  );
};

export default UserListContent;
