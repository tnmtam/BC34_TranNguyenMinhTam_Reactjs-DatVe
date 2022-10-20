import React, { Component } from 'react'
import './BaiTapBookingTicKet.css'
import danhSachGheData from './danhSachGhe.json'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'

export default class BaiTapBookingTicKet extends Component {

  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
        return <div key = {index}>
            <HangGhe hangGhe={hangGhe} soHangGhe={index} />
          </div>
    }) 
  }

  render() {
    return (
      <div style={{position:"fixed", width:'100%', height:'100%', backgroundImage:"url('./img/bgmovie.jpg')"}}>
          <div style={{position:"fixed", width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.8)'}}>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-8 text-center'>
                    <div className='text-warning display-4'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                    <div className='mt-3 text-light' style={{fontSize:'25px'}}>Màn hình</div>
                    <div className='mt-2 ml-5 pl-4' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                      <div className='screen'></div>
                      {this.renderHangGhe()}
                    </div>
                    
                </div>
                <div className='col-4'>
                    <div style={{fontSize:'30px'}} className='mt-2 text-light'>DANH SÁCH GHẾ BẠN CHỌN</div>
                    <ThongTinDatGhe />
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
