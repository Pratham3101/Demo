import React from "react";
import Data from './Data';

export default class App extends React.Component{
  constructor()
  {
    super();
 
    this.state=({
      
      student:true,
      student1:true,
      student2:true,
      student3:true,
      student4:true,

    })
  }

  
  studentsdata=()=>{
    this.setState({
      student:true,
       student1:false,
       student2:false,
       student3:false,
       student4:false,
    })
  }

  data1=()=>{
    this.setState({
       student1:true,
       student2:false,
       student3:false,
       student4:false,
       student:false,
    })
  }

  data2=()=>{
    this.setState({
      student1:false,
      student2:true,
       student3:false,
       student4:false,
       student:false,
    })
  }

  data3=()=>{
    this.setState({
      student1:false,
      student2:false,
       student3:true,
       student4:false,
       student:false,
    })
  }


  data4=()=>{
    this.setState({
      student1:false,
      student2:false,
       student3:false,
       student4:true,
       student:false,
    })
  }

  


  render()
  {

    const student_data =[
      {
          id:1,
          name:"XYZ",
          img: 'Assets/img1.jpg',
          btn1: 'A+',
          btn2: '9.9',
      },
  
      {
          id:2,
          name:"ABC",
          img: 'Assets/img1.jpg',
          btn1: 'A',
          btn2: '8.9',
      },
  
      {
          id:3,
          name:"PRK",
          img: 'Assets/img1.jpg',
          btn1: 'A+',
          btn2: '9.5',
      },
  
      {
          id:4,
          name:"ASD",
          img: 'Assets/img1.jpg',
          btn1: 'B',
          btn2: '7.6',
      },
  ]


  const stu_1=[
    {
          id:1,
          name:"XYZ",
          img: 'Assets/img1.jpg',
          btn1: 'A+',
          btn2: '9.9',
  },
  ]
  const stu_2=[
    {
          id:2,
          name:"ABC",
          img: 'Assets/img1.jpg',
          btn1: 'A',
          btn2: '8.9',
  },
  ]
  const stu_3=[
    {
      id:3,
      name:"PRK",
      img: 'Assets/img1.jpg',
      btn1: 'A+',
      btn2: '9.5',
  },
  ]
  const stu_4=[
    {
      id:4,
      name:"ASD",
      img: 'Assets/img1.jpg',
      btn1: 'B',
      btn2: '7.6',
  },
  ]



    return(
      <>
        <h1 className="text-center bg-dark text-warning p-4 my-3 fw-bold">Student Data</h1>

        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-md-12">
            <button className="btn btn-success px-4 fw-bold my-4  mx-3" onClick={()=>this.studentsdata()}>All_Student_Data</button>
              <button className="btn btn-danger px-4 fw-bold my-4  mx-3" onClick={()=>this.data1()}>Student_1</button>
              <button className="btn btn-warning px-4 fw-bold my-4  mx-3 text-light" onClick={()=>this.data2()}>Student_2</button>
              <button className="btn btn-primary px-4 fw-bold my-4  mx-3" onClick={()=>this.data3()}>Student_3</button>
              <button className="btn btn-dark px-4 fw-bold my-4  mx-3" onClick={()=>this.data4()}>Student_4</button>
            </div>



              <div className="col-md-12">
                <div className="row">


      
                    {

                      this.state.student ? 
                      student_data.map((val,index)=>{
                        return(
                          <div className="col-md-3" key={val.id}>

                            <Data 
                             name={val.name}
                             img={val.img}
                             btn1={val.btn1}
                             btn2={val.btn2}
                            />

                            </div>
                        )
                      }) :null 
                    }
                  
                </div>
              </div>
              
              <div className="col-md-12">
                <div className="row">
      
                    {

                      this.state.student1 &&

                      stu_1.map((val)=>{
                        return(
                          <div className="col-md-3 my-3" key={val.id}>

                            <Data 
                             name={val.name}
                             img={val.img}
                             btn1={val.btn1}
                             btn2={val.btn2}
                            />
                            </div>
                        )
                      })
                    }
                  
                </div>
              </div>

              <div className="col-md-12">
                <div className="row">
      
                    {

                      this.state.student2 &&
                      stu_2.map((val)=>{
                        return(
                          <div className="col-md-3 my-3"  key={val.id}>

                            <Data 
                             name={val.name}
                             img={val.img}
                             btn1={val.btn1}
                             btn2={val.btn2}
                            />
                            </div>
                        )
                      })
                    }
                  
                </div>
              </div>

              <div className="col-md-12">
                <div className="row">
      
                    {
                         this.state.student3 &&
                      stu_3.map((val)=>{
                        return(
                          <div className="col-md-3 my-3"  key={val.id}>

                            <Data 
                             name={val.name}
                             img={val.img}
                             btn1={val.btn1}
                             btn2={val.btn2}
                            />
                            </div>
                        )
                      })
                    }
                  
                </div>
              </div>

              <div className="col-md-12">
                <div className="row">
      
                    {
                         this.state.student4 &&
                      stu_4.map((val)=>{
                        return(
                          <div className="col-md-3 my-3"  key={val.id}>

                            <Data 
                             name={val.name}
                             img={val.img}
                             btn1={val.btn1}
                             btn2={val.btn2}
                            />
                            </div>
                        )
                      })
                    }
                  
                </div>
              </div>


          </div>
        </div>
      </>
    )
  }
}