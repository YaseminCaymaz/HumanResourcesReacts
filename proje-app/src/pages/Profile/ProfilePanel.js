import React, { useState, useEffect } from 'react';

function ProfilePanel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageSize = windowWidth > 768 ? 150 : 100; // Ekran genişliğine göre resim boyutunu ayarla

  return (
    <div className="container-fluid text-center" style={{ backgroundColor: 'rgb(13, 13, 13)', minHeight: '100vh' }}>
      <div className="container-fluid" style={{ backgroundColor: 'rgb(13, 13, 13)', height: '100%', padding: '20px' }}>
        <div className="row justify-content-center">
          <div className="col border border-dark" style={{ borderColor: 'rgb(255, 165, 0)', backgroundColor: 'rgb(15, 15, 15)', width: '14%', minHeight: '100vh', position: 'absolute', left: '0', top: '0', zIndex: '1', borderRadius: '1%' }}>
            <h4 className='text-light'>Yönetici</h4>
            <div style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img style={{ width: 'auto', height: 'auto', maxWidth: `${imageSize}px`, maxHeight: `${imageSize}px` }} src="https://www.freeiconspng.com/uploads/computer-user-icon-16.png" alt="Profil Resmi" />
            </div>

            <h4 className='text-light' style={{}}>Name </h4>
            <p className='text-light' style={{}}> Patron </p>
          </div>
          

          <div className="col-sm-10" style={{ marginTop: '0%', marginLeft: 'calc(14% + 5px)' }}>
            <div className="row">
              <div className="col-sm-12" style={{ backgroundColor: 'rgb(13, 13, 13)', margin: '10px', height: '10vh' }}>
                <h3 className='text-light' style={{ marginRight: '85%' }}>PROFİL DETAY</h3>
                <p className='text-light' style={{ marginRight: '54%' }}>Profiliniz ile ilgili fotoğraf, telefon numarası ve adres bilgileri güncellemelerini yapabilirsiniz.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 border border-dark" style={{ backgroundColor: 'rgb(15, 15, 15)', margin: '10px', height: '25vh', borderRadius: '1%' }}>
                <h5 className='text-light'  style={{marginRight: '85%' }}>KİŞİSEL BİLGİLER</h5>

              
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 border border-dark" style={{ backgroundColor: 'rgb(15, 15, 15)', margin: '10px', height: '25vh', borderRadius: '1%' }}>
                <h5 className='text-light'  style={{marginRight: '85%' }}>İLETİŞİM BİLGİLERİ</h5>

              
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 border border-dark" style={{ backgroundColor: 'rgb(15, 15, 15)', margin: '10px', height: '25vh', borderRadius: '1%' }}>
                <h5 className='text-light'  style={{marginRight: '85%' }}>ŞİRKET BİLGİLERİ</h5>

              
              </div>
            </div>
            

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;
