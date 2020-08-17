const SerialPort = require('serialport');
      Port=new SerialPort("/dev/tty.usbserial-AL016M0B", [baurate=9600, autoOpen=false]);

      SerialPort.list()
      .then(ports=>{
          for(var i=0;i<ports.length;++i){
            console.log(ports[i]);
          }
      })
         // ports=>ports.forEach(port=>{console.log(port.path)}),
         // err=>console.error(err)
      
      .catch(err=>{
          console.error(err);
      });
    
    /* 
      Port.open(()=>{
          console.log('포트가 오픈 되었습니다'),
          
          console.log(Port.read());
          
          
          Port.close(()=>{
              console.log('포트가 닫혔습니다');
          });
          
        });
*/