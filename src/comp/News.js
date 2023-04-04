// import InfiniteScroll from "react-infinite-scroll-component";
import { NewsItem } from './NewsItem';
import React from 'react';
import { Component } from 'react';
import Spinner from './Spinner';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }

    updateNews = async () => {
        // this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb0518be7fbc45c8a7054582a348f6d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.props.setProgress(60);
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        console.log(this.state.page)
        // this.props.setProgress(100);
    }

    // fetchMoreData = async () => { 
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd2bd421321c46a5ae0a2a46c301983b&page=${this.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({ page : this.state.page +1});
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         articles: this.articles.concat(parsedData.totalResults),
    //         totalResults: parsedData.totalResults,
    //     });
    // };

    componentDidMount() {
        this.updateNews()
        window.scrollTo(0, 0)
    }

    handlePrevious = async () => {
        await this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }

    handleNext = async () => {
        await this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (

            <div className='container' style={{ height: '100vh' }}>

                <h1 className="my-4 text-center">Sonic News - {this.capitalizeFirstLetter(this.props.category)} Top Headlines</h1>

                {this.state.loading && <Spinner />}

                {/* <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                > */}

                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="my-2 col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice() : ""} description={element.description ? element.description.slice(0, 150) : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>

                {/* </InfiniteScroll> */}

                <div className="arrs container py-4">
                    <button type="button" className="btn btn-dark" style={{ borderRadius: "0px" }} disabled={this.state.page <= 1} onClick={this.handlePrevious}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" style={{ borderRadius: "0px" }} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}