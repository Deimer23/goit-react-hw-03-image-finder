import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import  request  from "path/to/services/Requestsapi/Requestsapi";
import { BallTriangle } from "react-loader-spinner";

class App extends React.Component {

  state = {
    article: [],
    isLoading: false,
    query: "",
    page: 1,
    imaLarge: ""
  };  

  generarURL(string){
    let arrayUrl = string.split(" ");    
    let url = arrayUrl.join("+");       
    return url;
  }

  getSearch = async(e)=>{
    e.preventDefault();     
    const query = e.currentTarget.elements.query.value;
    if(query !== ""){
      this.setState({isLoading:true, query:query, page:2})
      const response = await request.getImage(this.generarURL(query), this.state.page);    
      this.setState({
        article: response.hits,
        isLoading: false,
      })      
    }else{
      alert('Por favor inserte lo que desea buscar')
    }         
  }

  loadMore = async()=>{
    this.setState(prevState => {
      return {page: this.state.page + 1, isLoading:true}
    })    
    const response = await request.getImage(this.state.query, this.state.page);    
      this.setState({
        article: response.hits,
        isLoading: false,
      }) 
  }

  onModal = (e)=>{
    const imaLarge = e.target.dataset.img;
    console.log(imaLarge)
    this.setState({
      imaLarge: imaLarge
    })
  }

  resetImaLarge = ()=>{
    this.setState({
      imaLarge: ""
    })
  }

  render(){
    return(
      <div className="App"
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar getSearch = {this.getSearch}/>        
        <ImageGallery>
          {this.state.isLoading ? <BallTriangle
                                        height={100}
                                        width={100}
                                        radius={5}
                                        color="#4fa94d"
                                        ariaLabel="ball-triangle-loading"
                                        wrapperClass={{}}
                                        wrapperStyle=""
                                        visible={true}
                                      /> 
                                    : <ImageGalleryItem image={this.state.article} onModal={this.onModal}/>}          
        </ImageGallery>
        {this.state.article.length > 0 ? <Button onLoadMore={this.loadMore} /> : ""}
        {this.state.imaLarge !== "" ? <Modal imaLarge={this.state.imaLarge} resetImaLarge={this.resetImaLarge}/> : ""}
      </div>
    )
  }
};


export default App;