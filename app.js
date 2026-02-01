const SB_URL='https://ebfplrhwuefqzkntjhaw.supabase.co';const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZnBscmh3dWVmcXprbnRqaGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNzU5ODEsImV4cCI6MjA1Mzg1MTk4MX0.sb_publishable_d1-APRwSK_GXuj7EsuEEvg_Tei7umW0';let sb,sbU;if(typeof window.supabase!=='undefined'){sb=window.supabase.createClient(SB_URL,SB_KEY);setTimeout(async()=>{try{let r=await sb.auth.signInWithPassword({email:'peppe@lovenest.com',password:'lovenest2024'});if(!r.data?.user){await sb.auth.signUp({email:'peppe@lovenest.com',password:'lovenest2024'});r=await sb.auth.signInWithPassword({email:'peppe@lovenest.com',password:'lovenest2024'});}sbU=r.data?.user;if(sbU){const {data}=await sb.from('config').select('data').eq('user_id',sbU.id).single();if(data?.data){db=data.data.db||db;extraDb=data.data.extraDb||extraDb;config=data.data.config||config;saveToStorage();}}}catch(e){}},500);}const _s=saveToStorage;saveToStorage=function(){_s();if(sbU)setTimeout(async()=>{try{await sb.from('config').upsert({user_id:sbU.id,data:{db,extraDb,config}},{onConflict:'user_id'});}catch(e){}},1000);};







        // DATABASE V13 - Riccardo Maltana gennaio 2026
        // VERSIONE: 14 (cambia questo numero per forzare reload)
        const DB_VERSION = 14;
        
        let db = {
            "love_2025": [
                        {
                                    "data": "19 Jul 2025",
                                    "ota": "Booking",
                                    "ospite": "Ginevra Cipriani",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 150.0,
                                    "netto_ota": 119.8,
                                    "cedolare": -31.5,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 83.3,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "6Le4LMbYdjdCg6Gy",
                                    "checkout": "20 Jul 2025"
                        },
                        {
                                    "data": "2 Aug 2025",
                                    "ota": "Booking",
                                    "ospite": "Pamela Veliraj",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 175.0,
                                    "netto_ota": 139.78,
                                    "cedolare": -36.75,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 98.03,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "X5omHerrnYKBaHMP",
                                    "checkout": "3 Aug 2025"
                        },
                        {
                                    "data": "16 Aug 2025",
                                    "ota": "Booking",
                                    "ospite": "",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 200.0,
                                    "netto_ota": 159.74,
                                    "cedolare": -42.0,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 112.74,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "85soRbJIpoVHJyQO",
                                    "checkout": "17 Aug 2025"
                        },
                        {
                                    "data": "23 Aug 2025",
                                    "ota": "Booking",
                                    "ospite": "Gianmarco Di Ganci",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 180.0,
                                    "netto_ota": 143.77,
                                    "cedolare": -37.8,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 100.97,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "fy94yf3mHP2sAmk8",
                                    "checkout": "24 Aug 2025"
                        },
                        {
                                    "data": "26 Sept 2025",
                                    "ota": "Booking",
                                    "ospite": "Silvia Berrettoni",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 335.0,
                                    "netto_ota": 267.57,
                                    "cedolare": -70.35,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 192.22,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "BpAj13ir0EnoHaix",
                                    "checkout": "28 Sept 2025"
                        },
                        {
                                    "data": "20 Oct 2025",
                                    "ota": "Booking",
                                    "ospite": "Beqiri Besian",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 180.0,
                                    "netto_ota": 143.77,
                                    "cedolare": -37.8,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 100.97,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "LXd0ZKwnwsgm16zm",
                                    "checkout": "21 Oct 2025"
                        },
                        {
                                    "data": "26 Oct 2025",
                                    "ota": "Booking",
                                    "ospite": "Renieri Felipe",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 180.0,
                                    "netto_ota": 143.77,
                                    "cedolare": -37.8,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 100.97,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "litbTWkckBZzrSw1",
                                    "checkout": "27 Oct 2025"
                        },
                        {
                                    "data": "14 Nov 2025",
                                    "ota": "Booking",
                                    "ospite": "Elisa Bacci",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 180.0,
                                    "netto_ota": 143.77,
                                    "cedolare": -37.8,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 100.97,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "kTjCwZ3lYBzeCmCo",
                                    "checkout": "15 Nov 2025"
                        },
                        {
                                    "data": "22 Nov 2025",
                                    "ota": "Booking",
                                    "ospite": "Hilda Perna",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 180.0,
                                    "netto_ota": 143.77,
                                    "cedolare": -37.8,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 100.97,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "MEIaSnZc6VALi3ZL",
                                    "checkout": "23 Nov 2025"
                        },
                        {
                                    "data": "29 Nov 2025",
                                    "ota": "Booking",
                                    "ospite": "Mosconi Martina",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 180.0,
                                    "netto_ota": 143.77,
                                    "cedolare": -37.8,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 100.97,
                                    "struttura": "love",
                                    "anno": 2025,
                                    "payout_id": "w8Byx8DrD3NbahYL",
                                    "checkout": "30 Nov 2025"
                        },
                        {
                                    "data": "12/30/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Christian Caddeo",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 89.89,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 85.89,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/24/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Rita Celotto",
                                    "notti": 3,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 222.98,
                                    "tasse_da_versare": 12.0,
                                    "netto_finale": 210.98,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/20/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Stefania Imperiale",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 74.82,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 70.82,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/16/2025",
                                    "ota": "Airbnb",
                                    "ospite": "James Rose",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 76.59,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 72.59,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/13/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Shalom Tzeiger",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 77.34,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 73.34,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/08/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Luca Ferrarello",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 78.59,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 74.59,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/05/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Grace Cossu",
                                    "notti": 3,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 203.36,
                                    "tasse_da_versare": 12.0,
                                    "netto_finale": 191.36,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "11/30/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Paola Mealli",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 120.78,
                                    "tasse_da_versare": 8.0,
                                    "netto_finale": 112.78,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "11/25/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Riccardo Lazzari",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 71.81,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 67.81,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "11/15/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Lucia Sgura",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 169.98,
                                    "tasse_da_versare": 8.0,
                                    "netto_finale": 161.98,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "10/31/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Mirko Visconti",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 165.98,
                                    "tasse_da_versare": 8.0,
                                    "netto_finale": 157.98,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "10/25/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Martina Bonistalli",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 94.41,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 90.41,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "10/10/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Leonardo Butini",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 96.18,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 92.18,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "10/04/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Marco Arbace",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 98.18,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 94.18,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "09/28/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Daniele Carli",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 98.18,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 94.18,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "09/18/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Alvaro Erosa Rizo",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 174.77,
                                    "tasse_da_versare": 8.0,
                                    "netto_finale": 166.77,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "09/17/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Minna Metsärinne",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 94.65,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 90.65,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "09/13/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Mattia Mugnai",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 93.16,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 89.16,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "09/11/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Francesco Verni",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 92.94,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 88.94,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "09/10/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Edinson Edgardo Marcelo Taboada",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 92.94,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 88.94,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "08/15/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Francesca Bonacchi",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 111.47,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 107.47,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "07/26/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Pietro Montemurro",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 112.22,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 108.22,
                                    "struttura": "love",
                                    "anno": 2025
                        },
                        {
                                    "data": "07/12/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Lorenzo Pachetti",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 96.65,
                                    "tasse_da_versare": 4.0,
                                    "netto_finale": 92.65,
                                    "struttura": "love",
                                    "anno": 2025
                        }
            ],
            "tart_2024": [
                        {
                                    "data": "2 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "Christopher Hollidge",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 93.6,
                                    "netto_ota": 71.55,
                                    "cedolare": -17.86687716172309,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 53.68,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "KGS3vMVw9o97TC7o",
                                    "checkout": "3 Mar 2024"
                        },
                        {
                                    "data": "1 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "ROBERTO Bettini",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 156.0,
                                    "netto_ota": 119.27,
                                    "cedolare": -29.78312283827691,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 89.49,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "KGS3vMVw9o97TC7o",
                                    "checkout": "2 Mar 2024"
                        },
                        {
                                    "data": "22 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "ROCCO QUATTRONE",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 72.0,
                                    "netto_ota": 55.04,
                                    "cedolare": -12.19047194920414,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 42.85,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "ufLVbLRHmhUlFe7q",
                                    "checkout": "23 Mar 2024"
                        },
                        {
                                    "data": "21 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "genny passaro",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 94.5,
                                    "netto_ota": 72.25,
                                    "cedolare": -16.002209271983997,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 56.25,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "ufLVbLRHmhUlFe7q",
                                    "checkout": "22 Mar 2024"
                        },
                        {
                                    "data": "20 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "Manuel Istrati",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 126.0,
                                    "netto_ota": 96.33,
                                    "cedolare": -21.33554074976081,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 74.99,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "ufLVbLRHmhUlFe7q",
                                    "checkout": "21 Mar 2024"
                        },
                        {
                                    "data": "16 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "Matteo Giresini",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 85.0,
                                    "netto_ota": 64.99,
                                    "cedolare": -14.394236409498129,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 50.6,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "ufLVbLRHmhUlFe7q",
                                    "checkout": "17 Mar 2024"
                        },
                        {
                                    "data": "4 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "Angelo Co",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 374.4,
                                    "netto_ota": 286.24,
                                    "cedolare": -63.397541619552925,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 222.84,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "ufLVbLRHmhUlFe7q",
                                    "checkout": "8 Mar 2024"
                        },
                        {
                                    "data": "1 Apr 2024",
                                    "ota": "Booking",
                                    "ospite": "Marco Lentini",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 85.0,
                                    "netto_ota": 64.99,
                                    "cedolare": -16.228907144024845,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 48.76,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "JXvIipLCWKlBAoqZ",
                                    "checkout": "2 Apr 2024"
                        },
                        {
                                    "data": "28 Mar 2024",
                                    "ota": "Booking",
                                    "ospite": "carlo cubeddu",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 75.0,
                                    "netto_ota": 57.35,
                                    "cedolare": -14.32109285597515,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 43.03,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "JXvIipLCWKlBAoqZ",
                                    "checkout": "29 Mar 2024"
                        },
                        {
                                    "data": "8 Apr 2024",
                                    "ota": "Booking",
                                    "ospite": "odette hugounenc",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 170.0,
                                    "netto_ota": 129.97,
                                    "cedolare": -32.455,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 97.52,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "0wAsG6RSOjcLd5mG",
                                    "checkout": "10 Apr 2024"
                        },
                        {
                                    "data": "5 Apr 2024",
                                    "ota": "Booking",
                                    "ospite": "Pierluigi Sambuco",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 170.0,
                                    "netto_ota": 129.97,
                                    "cedolare": -32.455,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 97.52,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "0wAsG6RSOjcLd5mG",
                                    "checkout": "7 Apr 2024"
                        },
                        {
                                    "data": "10 Apr 2024",
                                    "ota": "Booking",
                                    "ospite": "jorge freitas",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 85.0,
                                    "netto_ota": 64.99,
                                    "cedolare": -16.23,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 48.76,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "GHYZ6QBj2DcZcl6K",
                                    "checkout": "11 Apr 2024"
                        },
                        {
                                    "data": "30 Apr 2024",
                                    "ota": "Booking",
                                    "ospite": "Alessandro Gaziano",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 85.0,
                                    "netto_ota": 64.99,
                                    "cedolare": -16.227808573068828,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 48.76,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "yWRkTY9VvYjdVc6K",
                                    "checkout": "1 May 2024"
                        },
                        {
                                    "data": "29 Apr 2024",
                                    "ota": "Booking",
                                    "ospite": "pezzini saverio",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 127.5,
                                    "netto_ota": 97.48,
                                    "cedolare": -24.340464374561464,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 73.14,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "yWRkTY9VvYjdVc6K",
                                    "checkout": "30 Apr 2024"
                        },
                        {
                                    "data": "27 Apr 2024",
                                    "ota": "Booking",
                                    "ospite": "Giorgione Roberto",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 197.6,
                                    "netto_ota": 151.07,
                                    "cedolare": -37.72172705236972,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 113.35,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "yWRkTY9VvYjdVc6K",
                                    "checkout": "28 Apr 2024"
                        },
                        {
                                    "data": "1 May 2024",
                                    "ota": "Booking",
                                    "ospite": "UrÅ¡ka Å½ibrat",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 170.0,
                                    "netto_ota": 129.97,
                                    "cedolare": -32.45,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 97.52,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "GiGP0Jkc8pUIVr9H",
                                    "checkout": "2 May 2024"
                        },
                        {
                                    "data": "10 May 2024",
                                    "ota": "Booking",
                                    "ospite": "Massimo Fabris",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 190.0,
                                    "netto_ota": 145.26,
                                    "cedolare": -36.27,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 108.99,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "OB08etriOrw4irSD",
                                    "checkout": "12 May 2024"
                        },
                        {
                                    "data": "21 May 2024",
                                    "ota": "Booking",
                                    "ospite": "hyewook Hwang",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 95.0,
                                    "netto_ota": 72.64,
                                    "cedolare": -18.14,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 54.5,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "IktNmmUFOBWomxnC",
                                    "checkout": "22 May 2024"
                        },
                        {
                                    "data": "27 May 2024",
                                    "ota": "Booking",
                                    "ospite": "StÃ©phan HANTUTE",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 100.0,
                                    "netto_ota": 76.45,
                                    "cedolare": -14.037034721554296,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 62.41,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "klv5YpbruBmggvPj",
                                    "checkout": "28 May 2024"
                        },
                        {
                                    "data": "24 May 2024",
                                    "ota": "Booking",
                                    "ospite": "Luca Gardini",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 100.0,
                                    "netto_ota": 76.45,
                                    "cedolare": -14.037034721554296,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 62.41,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "klv5YpbruBmggvPj",
                                    "checkout": "25 May 2024"
                        },
                        {
                                    "data": "23 May 2024",
                                    "ota": "Booking",
                                    "ospite": "Carmen Rech",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 72.0,
                                    "netto_ota": 55.04,
                                    "cedolare": -10.10593055689141,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 44.93,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "klv5YpbruBmggvPj",
                                    "checkout": "24 May 2024"
                        },
                        {
                                    "data": "1 Jun 2024",
                                    "ota": "Booking",
                                    "ospite": "Andrea Onofri",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 157.0,
                                    "netto_ota": 120.03,
                                    "cedolare": -29.97,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 90.06,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "0xikKm99YLrTeqwt",
                                    "checkout": "2 Jun 2024"
                        },
                        {
                                    "data": "15 Jun 2024",
                                    "ota": "Booking",
                                    "ospite": "Fiona Gray",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 615.0,
                                    "netto_ota": 470.2,
                                    "cedolare": -117.41,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 352.79,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "MFkzhP2OPXAhiloy",
                                    "checkout": "19 Jun 2024"
                        },
                        {
                                    "data": "30 Jun 2024",
                                    "ota": "Booking",
                                    "ospite": "Luca Molo",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 382.5,
                                    "netto_ota": 292.44,
                                    "cedolare": -73.02276136801719,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 219.42,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "QTaBqS7SjQwQvFOa",
                                    "checkout": "2 Jul 2024"
                        },
                        {
                                    "data": "29 Jun 2024",
                                    "ota": "Booking",
                                    "ospite": "Cristina Giliberti",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 125.0,
                                    "netto_ota": 95.57,
                                    "cedolare": -23.86399023369376,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 71.71,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "QTaBqS7SjQwQvFOa",
                                    "checkout": "30 Jun 2024"
                        },
                        {
                                    "data": "27 Jun 2024",
                                    "ota": "Booking",
                                    "ospite": "Alessandra Cetraro",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 205.0,
                                    "netto_ota": 156.72,
                                    "cedolare": -39.13324839828906,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 117.59,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "QTaBqS7SjQwQvFOa",
                                    "checkout": "29 Jun 2024"
                        },
                        {
                                    "data": "7 Jul 2024",
                                    "ota": "Booking",
                                    "ospite": "Cesar Sanchez Perez",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 110.0,
                                    "netto_ota": 84.1,
                                    "cedolare": -21.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 63.1,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "7cEFjL1nKs4NKmCI",
                                    "checkout": "8 Jul 2024"
                        },
                        {
                                    "data": "22 Jul 2024",
                                    "ota": "Booking",
                                    "ospite": "Veronika AndrlÃ­kovÃ¡",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 645.0,
                                    "netto_ota": 493.13,
                                    "cedolare": -123.14,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 369.99,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "wHodvBSZQqlpeY6v",
                                    "checkout": "24 Jul 2024"
                        },
                        {
                                    "data": "25 Jul 2024",
                                    "ota": "Booking",
                                    "ospite": "Andrea Alberto De Luca",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 140.0,
                                    "netto_ota": 107.04,
                                    "cedolare": -26.73,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 80.31,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "7oRHGEHPyBSIMqI1",
                                    "checkout": "26 Jul 2024"
                        },
                        {
                                    "data": "17 Aug 2024",
                                    "ota": "Booking",
                                    "ospite": "Mamoru NAKAYA",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 99.39,
                                    "cedolare": 0.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 99.39,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "y59KVq0sv50DwiTC",
                                    "checkout": "18 Aug 2024"
                        },
                        {
                                    "data": "16 Aug 2024",
                                    "ota": "Booking",
                                    "ospite": "Arturo Falcone",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 208.0,
                                    "netto_ota": 159.03,
                                    "cedolare": 0.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 159.03,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "y59KVq0sv50DwiTC",
                                    "checkout": "17 Aug 2024"
                        },
                        {
                                    "data": "20 Aug 2024",
                                    "ota": "Booking",
                                    "ospite": "Davide Tripodi",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 290.0,
                                    "netto_ota": 221.72,
                                    "cedolare": 0.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 221.72,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "spLtrAXL3eMHQJnM",
                                    "checkout": "22 Aug 2024"
                        },
                        {
                                    "data": "5 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "Salvatorica Tanda",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 99.39,
                                    "cedolare": 0.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 99.39,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "kblDyvXLhr7enjQR",
                                    "checkout": "6 Sept 2024"
                        },
                        {
                                    "data": "3 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "SlÃ¡movÃ¡ Aneta",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 235.0,
                                    "netto_ota": 179.67,
                                    "cedolare": 0.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 179.67,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "kblDyvXLhr7enjQR",
                                    "checkout": "5 Sept 2024"
                        },
                        {
                                    "data": "13 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "Almasi Eva",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 135.0,
                                    "netto_ota": 103.22,
                                    "cedolare": -26.105175043134633,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 77.11,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "oGvUBkzMIMBzeqLS",
                                    "checkout": "14 Sept 2024"
                        },
                        {
                                    "data": "12 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "Mark Livschitz",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 100.0,
                                    "netto_ota": 76.45,
                                    "cedolare": -19.33482495686536,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 57.12,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "oGvUBkzMIMBzeqLS",
                                    "checkout": "13 Sept 2024"
                        },
                        {
                                    "data": "23 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "Hubert Schmidt",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 235.0,
                                    "netto_ota": 179.67,
                                    "cedolare": -45.197483220974895,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 134.47,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "KcNp9OPC6R6LJxfJ",
                                    "checkout": "25 Sept 2024"
                        },
                        {
                                    "data": "21 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "anna maria donvito",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 135.0,
                                    "netto_ota": 103.22,
                                    "cedolare": -25.965849713747588,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 77.25,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "KcNp9OPC6R6LJxfJ",
                                    "checkout": "22 Sept 2024"
                        },
                        {
                                    "data": "16 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "Marco Concas",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 505.0,
                                    "netto_ota": 386.1,
                                    "cedolare": -97.1266670652775,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 288.97,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "KcNp9OPC6R6LJxfJ",
                                    "checkout": "21 Sept 2024"
                        },
                        {
                                    "data": "1 Oct 2024",
                                    "ota": "Booking",
                                    "ospite": "Elisabetta Righi",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 99.39,
                                    "cedolare": -25.38097132421894,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 74.01,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "VfGqYaaf1GEnVe9x",
                                    "checkout": "2 Oct 2024"
                        },
                        {
                                    "data": "28 Sept 2024",
                                    "ota": "Booking",
                                    "ospite": "giovanna apicella",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 135.0,
                                    "netto_ota": 103.22,
                                    "cedolare": -26.359028675781055,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 76.86,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "VfGqYaaf1GEnVe9x",
                                    "checkout": "29 Sept 2024"
                        },
                        {
                                    "data": "12 Oct 2024",
                                    "ota": "Booking",
                                    "ospite": "Eric McSweeney",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 99.39,
                                    "cedolare": -19.993547836161518,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 79.4,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "lJ4rmfedPhtVmPhm",
                                    "checkout": "13 Oct 2024"
                        },
                        {
                                    "data": "11 Oct 2024",
                                    "ota": "Booking",
                                    "ospite": "Stefan TrÃ¶ger",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 99.07,
                                    "cedolare": -19.929175813749087,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 79.14,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "lJ4rmfedPhtVmPhm",
                                    "checkout": "12 Oct 2024"
                        },
                        {
                                    "data": "2 Oct 2024",
                                    "ota": "Booking",
                                    "ospite": "Guillermo Diaz",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 1050.0,
                                    "netto_ota": 802.77,
                                    "cedolare": -161.48727635008936,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 641.28,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "lJ4rmfedPhtVmPhm",
                                    "checkout": "7 Oct 2024"
                        },
                        {
                                    "data": "13 Oct 2024",
                                    "ota": "Booking",
                                    "ospite": "Alexander Chumacero agurto",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 445.0,
                                    "netto_ota": 339.14,
                                    "cedolare": -136.59,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 202.55,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "tLF2CMczkGDTYiwL",
                                    "checkout": "17 Oct 2024"
                        },
                        {
                                    "data": "1 Nov 2024",
                                    "ota": "Booking",
                                    "ospite": "Michele Sommani",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 635.0,
                                    "netto_ota": 483.93,
                                    "cedolare": -121.9,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 362.03,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "H2KUIHljDFogTAix",
                                    "checkout": "3 Nov 2024"
                        },
                        {
                                    "data": "22 Nov 2024",
                                    "ota": "Booking",
                                    "ospite": "Stasolla Vittoria",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 435.0,
                                    "netto_ota": 331.52,
                                    "cedolare": -83.71,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 247.81,
                                    "struttura": "tart",
                                    "anno": 2024,
                                    "payout_id": "UE6kcfoMODnY5fwK",
                                    "checkout": "24 Nov 2024"
                        },
                        {
                                    "data": "09/10/2024",
                                    "ota": "Airbnb",
                                    "ospite": "Riccardo Russo",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "netto_ota": 165.75,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 8.0,
                                    "netto_finale": 165.75,
                                    "struttura": "tart",
                                    "anno": 2024
                        },
                        {
                                    "data": "03/29/2024",
                                    "ota": "Airbnb",
                                    "ospite": "Michele Cuzziol",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 222.25,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 4.0,
                                    "netto_finale": 222.25,
                                    "struttura": "tart",
                                    "anno": 2024
                        },
                        {
                                    "data": "03/27/2024",
                                    "ota": "Airbnb",
                                    "ospite": "Francesco Sanna Semprevivo",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 49.72,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 4.0,
                                    "netto_finale": 49.72,
                                    "struttura": "tart",
                                    "anno": 2024
                        },
                        {
                                    "data": "03/15/2024",
                                    "ota": "Airbnb",
                                    "ospite": "Francesco Pomponio",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 62.62,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 4.0,
                                    "netto_finale": 62.62,
                                    "struttura": "tart",
                                    "anno": 2024
                        }
            ],
            "tart_2025": [
                        {
                                    "data": "31 Dec 2024",
                                    "ota": "Booking",
                                    "ospite": "Giuseppe Ferrero",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 99.07,
                                    "cedolare": -25.39,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 73.68,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "ql0lJ7dNRD8jXPi4",
                                    "checkout": "1 Jan 2025"
                        },
                        {
                                    "data": "7 Mar 2025",
                                    "ota": "Booking",
                                    "ospite": "Giulia Marconi",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 99.07,
                                    "cedolare": -27.3,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 71.77,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "qj2f2YBhbMQm11T9",
                                    "checkout": "8 Mar 2025"
                        },
                        {
                                    "data": "3 Apr 2025",
                                    "ota": "Booking",
                                    "ospite": "Dutan Georgiana",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 400.0,
                                    "netto_ota": 304.84,
                                    "cedolare": -84.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 220.84,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "aAXFKsergfJbAROC",
                                    "checkout": "7 Apr 2025"
                        },
                        {
                                    "data": "19 Apr 2025",
                                    "ota": "Booking",
                                    "ospite": "Joanne Zinger",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 295.0,
                                    "netto_ota": 224.83,
                                    "cedolare": -61.95,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 162.88,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "f01Tiy7lF0y1mQ6A",
                                    "checkout": "21 Apr 2025"
                        },
                        {
                                    "data": "27 Apr 2025",
                                    "ota": "Booking",
                                    "ospite": "Filippo Dilorenzo",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 225.0,
                                    "netto_ota": 225.0,
                                    "cedolare": -47.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 177.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "aCKK3ftOpknfMDNR",
                                    "checkout": "29 Apr 2025"
                        },
                        {
                                    "data": "26 Apr 2025",
                                    "ota": "Booking",
                                    "ospite": "bezzi lisa",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 170.0,
                                    "netto_ota": 170.0,
                                    "cedolare": -35.699999999999996,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 134.3,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "aCKK3ftOpknfMDNR",
                                    "checkout": "27 Apr 2025"
                        },
                        {
                                    "data": "22 Apr 2025",
                                    "ota": "Booking",
                                    "ospite": "Anna Banfi",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 725.0,
                                    "netto_ota": 725.0,
                                    "cedolare": -152.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 572.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "aCKK3ftOpknfMDNR",
                                    "checkout": "26 Apr 2025"
                        },
                        {
                                    "data": "3 May 2025",
                                    "ota": "Booking",
                                    "ospite": "Stefano Cingi",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 200.0,
                                    "netto_ota": 200.0,
                                    "cedolare": -42.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 158.0,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "pzODQmEmp7VhKrnW",
                                    "checkout": "4 May 2025"
                        },
                        {
                                    "data": "1 May 2025",
                                    "ota": "Booking",
                                    "ospite": "Fabrizio Falaschi",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 100.0,
                                    "netto_ota": 100.0,
                                    "cedolare": -21.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 79.0,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "pzODQmEmp7VhKrnW",
                                    "checkout": "2 May 2025"
                        },
                        {
                                    "data": "4 May 2025",
                                    "ota": "Booking",
                                    "ospite": "Natalia Piasecka",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 655.0,
                                    "netto_ota": 655.0,
                                    "cedolare": -137.54999999999998,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 517.45,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "AOfUQPvuJTRxfT3r",
                                    "checkout": "10 May 2025"
                        },
                        {
                                    "data": "25 May 2025",
                                    "ota": "Booking",
                                    "ospite": "Yuval Ben-Gai",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 125.0,
                                    "netto_ota": 125.0,
                                    "cedolare": -26.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 98.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "5HQ5rOLnLBEOJZp9",
                                    "checkout": "26 May 2025"
                        },
                        {
                                    "data": "24 May 2025",
                                    "ota": "Booking",
                                    "ospite": "Rok SikoÅ¡ek",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 125.0,
                                    "netto_ota": 125.0,
                                    "cedolare": -26.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 98.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "5HQ5rOLnLBEOJZp9",
                                    "checkout": "25 May 2025"
                        },
                        {
                                    "data": "17 May 2025",
                                    "ota": "Booking",
                                    "ospite": "ROSAMARIA SASSOLI",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 700.0,
                                    "netto_ota": 700.0,
                                    "cedolare": -147.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 553.0,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "5HQ5rOLnLBEOJZp9",
                                    "checkout": "24 May 2025"
                        },
                        {
                                    "data": "1 Jun 2025",
                                    "ota": "Booking",
                                    "ospite": "jean Michel BARLIER",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 200.0,
                                    "netto_ota": 200.0,
                                    "cedolare": -42.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 158.0,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "PDO7gaf4eapnV0ec",
                                    "checkout": "3 Jun 2025"
                        },
                        {
                                    "data": "31 May 2025",
                                    "ota": "Booking",
                                    "ospite": "Bitna Kim",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 125.0,
                                    "netto_ota": 125.0,
                                    "cedolare": -26.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 98.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "PDO7gaf4eapnV0ec",
                                    "checkout": "1 Jun 2025"
                        },
                        {
                                    "data": "27 May 2025",
                                    "ota": "Booking",
                                    "ospite": "Pam Lever",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 340.0,
                                    "netto_ota": 340.0,
                                    "cedolare": -71.39999999999999,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 268.6,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "PDO7gaf4eapnV0ec",
                                    "checkout": "30 May 2025"
                        },
                        {
                                    "data": "4 Jun 2025",
                                    "ota": "Booking",
                                    "ospite": "Jan Eising",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 125.0,
                                    "netto_ota": 125.0,
                                    "cedolare": -26.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 98.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "OyEu84MAgrAPLCli",
                                    "checkout": "5 Jun 2025"
                        },
                        {
                                    "data": "8 Jul 2025",
                                    "ota": "Booking",
                                    "ospite": "Gabriele Masiello",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 130.0,
                                    "netto_ota": 130.0,
                                    "cedolare": -27.3,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 102.7,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "6pVQvuyPEsOvRObb",
                                    "checkout": "9 Jul 2025"
                        },
                        {
                                    "data": "28 Jun 2025",
                                    "ota": "Booking",
                                    "ospite": "Andrei-Toader Filip",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 1125.0,
                                    "netto_ota": 1125.0,
                                    "cedolare": -236.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 888.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "6pVQvuyPEsOvRObb",
                                    "checkout": "6 Jul 2025"
                        },
                        {
                                    "data": "15 Jul 2025",
                                    "ota": "Booking",
                                    "ospite": "Arte Verde Bluline srl",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 340.0,
                                    "netto_ota": 340.0,
                                    "cedolare": -71.39999999999999,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 268.6,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "h3lmGqzyTh03tPeT",
                                    "checkout": "18 Jul 2025"
                        },
                        {
                                    "data": "20 Jul 2025",
                                    "ota": "Booking",
                                    "ospite": "Cristina Urcan",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 725.0,
                                    "netto_ota": 725.0,
                                    "cedolare": -152.25,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 572.75,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "ruTqGZ7ff5b9EuUc",
                                    "checkout": "27 Jul 2025"
                        },
                        {
                                    "data": "12 Sept 2025",
                                    "ota": "Booking",
                                    "ospite": "Krasimira Kutunidu",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 445.0,
                                    "netto_ota": 445.0,
                                    "cedolare": -93.45,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 351.55,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "A8BrqXrwDISdWKWY",
                                    "checkout": "16 Sept 2025"
                        },
                        {
                                    "data": "7 Sept 2025",
                                    "ota": "Booking",
                                    "ospite": "Markus Matilainen",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 550.0,
                                    "netto_ota": 550.0,
                                    "cedolare": -115.5,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 434.5,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "A8BrqXrwDISdWKWY",
                                    "checkout": "12 Sept 2025"
                        },
                        {
                                    "data": "18 Sept 2025",
                                    "ota": "Booking",
                                    "ospite": "Woters Manfred",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 655.0,
                                    "netto_ota": 655.0,
                                    "cedolare": -137.54999999999998,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 517.45,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "1G3Ifd9TviJde7HF",
                                    "checkout": "24 Sept 2025"
                        },
                        {
                                    "data": "28 Sept 2025",
                                    "ota": "Booking",
                                    "ospite": "Rob Walters",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 350.0,
                                    "netto_ota": 350.0,
                                    "cedolare": -73.5,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 276.5,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "EFahsMFBhB6dhhVS",
                                    "checkout": "1 Oct 2025"
                        },
                        {
                                    "data": "27 Sept 2025",
                                    "ota": "Booking",
                                    "ospite": "Chiara Zanlari",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 140.0,
                                    "netto_ota": 140.0,
                                    "cedolare": -29.4,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 110.6,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "EFahsMFBhB6dhhVS",
                                    "checkout": "28 Sept 2025"
                        },
                        {
                                    "data": "24 Sept 2025",
                                    "ota": "Booking",
                                    "ospite": "Monica Del Prato",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "lordo": 340.0,
                                    "netto_ota": 340.0,
                                    "cedolare": -71.39999999999999,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 268.6,
                                    "struttura": "tart",
                                    "anno": 2025,
                                    "payout_id": "EFahsMFBhB6dhhVS",
                                    "checkout": "27 Sept 2025"
                        },
                        {
                                    "data": "12/31/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Riccardo Maltana",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 87.39,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 4.0,
                                    "netto_finale": 87.39,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/19/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Adriana Avanzini",
                                    "notti": 9,
                                    "ospiti": 2,
                                    "netto_ota": 410.6,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 36.0,
                                    "netto_finale": 410.6,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "12/06/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Raffaele De Crescenzo",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "netto_ota": 106.98,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 8.0,
                                    "netto_finale": 106.98,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "10/26/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Margarita Zhidro",
                                    "notti": 4,
                                    "ospiti": 2,
                                    "netto_ota": 213.21,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 16.0,
                                    "netto_finale": 213.21,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "10/20/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Federico Bassis",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "netto_ota": 131.84,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 8.0,
                                    "netto_finale": 131.84,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "10/03/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Laurie Discourd Bourdet",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 116.78,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 4.0,
                                    "netto_finale": 116.78,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "08/11/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Federico Bassis",
                                    "notti": 3,
                                    "ospiti": 2,
                                    "netto_ota": 193.45,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 12.0,
                                    "netto_finale": 193.45,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "04/17/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Danny Leshem",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 105.48,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 4.0,
                                    "netto_finale": 105.48,
                                    "struttura": "tart",
                                    "anno": 2025
                        },
                        {
                                    "data": "04/11/2025",
                                    "ota": "Airbnb",
                                    "ospite": "Christina Trouchon",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "netto_ota": 135.61,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 8.0,
                                    "netto_finale": 135.61,
                                    "struttura": "tart",
                                    "anno": 2025
                        }
            ],
            "tart_2026": [
                        {
                                    "data": "01/23/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Sidne Fanucci",
                                    "notti": 8,
                                    "ospiti": 2,
                                    "netto_ota": 261.43,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 32.0,
                                    "netto_finale": 261.43,
                                    "struttura": "tart",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/20/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Carla Roman",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "netto_ota": 90.41,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 8.0,
                                    "netto_finale": 90.41,
                                    "struttura": "tart",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/01/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Cilio Chalhoub",
                                    "notti": 4,
                                    "ospiti": 2,
                                    "netto_ota": 160.47,
                                    "tasse_da_versare": 0,
                                    "tassa_soggiorno_airbnb": 16.0,
                                    "netto_finale": 160.47,
                                    "struttura": "tart",
                                    "anno": 2026
                        },
                        {
                                    "data": "2026-01-31",
                                    "ota": "Diretta",
                                    "ospite": "Alessandro Campilla",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 160.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 160.0,
                                    "struttura": "tart",
                                    "anno": 2026
                        },
                        {
                                    "data": "2026-01-11",
                                    "ota": "Diretta",
                                    "ospite": "Rafaelli Simone",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 80.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 80.0,
                                    "struttura": "tart",
                                    "anno": 2026
                        }
            ],
            "love_2026": [
                        {
                                    "data": "01/24/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Daniele Lupini",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 86.37,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 81.37,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/16/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Vanessa Scarsella",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 137.32,
                                    "tasse_da_versare": 10.0,
                                    "netto_finale": 127.32,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/11/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Sofia Innocente",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 91.64,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 86.64,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/03/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Samuele Scali",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 168.47,
                                    "tasse_da_versare": 10.0,
                                    "netto_finale": 158.47,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/02/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Clarissa Galeotti",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 90.64,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 85.64,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/01/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Matteo E Dania Rigamonti",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 165.2,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 160.2,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "2026-01-09",
                                    "ota": "Booking",
                                    "ospite": "elisa cervasi",
                                    "notti": 2,
                                    "ospiti": 2,
                                    "lordo": 335.0,
                                    "netto_ota": 267.56,
                                    "cedolare": -70.35,
                                    "tasse_da_versare": 10.0,
                                    "netto_finale": 197.21,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "2026-01-18",
                                    "ota": "Diretta",
                                    "ospite": "Tomaino",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 180.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 180.0,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "2026-01-23",
                                    "ota": "Diretta",
                                    "ospite": "Elisa Bacci",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 140.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 140.0,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "2026-01-19",
                                    "ota": "Diretta",
                                    "ospite": "Alessandra Giusti",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "netto_ota": 135.0,
                                    "tasse_da_versare": 0,
                                    "netto_finale": 135.0,
                                    "struttura": "love",
                                    "anno": 2026
                        },
                        {
                                    "data": "01/01/2026",
                                    "ota": "Airbnb",
                                    "ospite": "Riccardo Maltana",
                                    "notti": 1,
                                    "ospiti": 2,
                                    "ricevuto_airbnb": 87.39,
                                    "tasse_da_versare": 5.0,
                                    "netto_finale": 82.39,
                                    "struttura": "love",
                                    "anno": 2026
                        }
            ]
};
        
        let extraDb = {
            "entrate": [
            {
                        "data": "2026-01-11",
                        "servizio": "🚐 Navetta stazione",
                        "cliente": "Rafaelli",
                        "importo": 20
            },
            {
                        "data": "2026-01-09",
                        "servizio": "🧹 Pulizie standard",
                        "cliente": "Elisa",
                        "importo": 20
            },
            {
                        "data": "2026-01-16",
                        "servizio": "🧹 Pulizie standard",
                        "cliente": "Elisa",
                        "importo": 20
            },
            {
                        "data": "2026-01-23",
                        "servizio": "🧹 Pulizie standard",
                        "cliente": "Elisa",
                        "importo": 20
            },
            {
                        "data": "2026-01-16",
                        "servizio": "🧹 Pulizie standard",
                        "cliente": "Angela",
                        "importo": 36
            },
            {
                        "data": "2026-01-23",
                        "servizio": "🧹 Pulizie standard",
                        "cliente": "Angela",
                        "importo": 36
            },
            {
                        "data": "2026-01-30",
                        "importo": 20,
                        "anno": 2026,
                        "note": "",
                        "servizio": "🧹 Pulizie standard",
                        "cliente": "Elisa"
            },
            {
                        "data": "2026-01-30",
                        "importo": 36,
                        "anno": 2026,
                        "note": "",
                        "servizio": "🧹 Pulizie standard",
                        "cliente": "Angela"
            }
],
            "uscite": [
            {
                        "data": "2024-03-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-04-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-05-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-06-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-07-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-08-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-09-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-10-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-11-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2024-12-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2024
            },
            {
                        "data": "2025-01-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-02-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-03-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-04-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-05-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-06-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-07-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-08-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-09-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-10-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-11-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2025-12-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2025
            },
            {
                        "data": "2026-01-01",
                        "struttura": "tart",
                        "categoria": "📡 Internet",
                        "descrizione": "Abbonamento Internet mensile Tartaruga",
                        "importo": 7,
                        "anno": 2026
            },
            {
                        "data": "2025-02-18",
                        "struttura": "tart",
                        "categoria": "💡 Luce",
                        "descrizione": "Bolletta luce Tartaruga",
                        "importo": 41,
                        "anno": 2025
            },
            {
                        "data": "2025-03-13",
                        "struttura": "tart",
                        "categoria": "🔥 Gas",
                        "descrizione": "Bolletta gas Tartaruga",
                        "importo": 135,
                        "anno": 2025
            },
            {
                        "data": "2025-04-15",
                        "struttura": "tart",
                        "categoria": "💡 Luce",
                        "descrizione": "Bolletta luce Tartaruga",
                        "importo": 80,
                        "anno": 2025
            },
            {
                        "data": "2025-05-12",
                        "struttura": "tart",
                        "categoria": "🔥 Gas",
                        "descrizione": "Bolletta gas Tartaruga",
                        "importo": 75,
                        "anno": 2025
            },
            {
                        "data": "2025-06-11",
                        "struttura": "tart",
                        "categoria": "💡 Luce",
                        "descrizione": "Bolletta luce Tartaruga",
                        "importo": 108,
                        "anno": 2025
            },
            {
                        "data": "2025-07-10",
                        "struttura": "tart",
                        "categoria": "🔥 Gas",
                        "descrizione": "Bolletta gas Tartaruga",
                        "importo": 96,
                        "anno": 2025
            },
            {
                        "data": "2025-08-11",
                        "struttura": "tart",
                        "categoria": "💡 Luce",
                        "descrizione": "Bolletta luce Tartaruga",
                        "importo": 136,
                        "anno": 2025
            },
            {
                        "data": "2025-09-09",
                        "struttura": "tart",
                        "categoria": "🔥 Gas",
                        "descrizione": "Bolletta gas Tartaruga",
                        "importo": 46,
                        "anno": 2025
            }
]
        };
        
        let config = {
            anni: [2026, 2025, 2024],
            annoCorrente: 2026,
            clienti: ["Elisa", "Angela", "Rafaelli", "Altro"],
            servizi: ["🧹 Pulizie standard", "🧹 Pulizie approfondite", "🚐 Navetta aeroporto", "🚐 Navetta stazione", "🛏️ Cambio biancheria", "🍳 Colazione", "🔧 Manutenzione", "🛒 Spesa", "📦 Altro"],
            categorie: ["💡 Luce", "🔥 Gas", "💧 Acqua", "📡 Internet", "🔧 Manutenzione", "🛒 Forniture", "🧹 Pulizie", "📊 Software", "🏛️ Tasse", "✨ Beyond", "📦 Altro"],
            ota: [
                { id: 'agoda', nome: 'Agoda', emoji: '🏪', colore: '#FF9800', tipo: 'entrata', tassa: 'si' },
                { id: 'airbnb', nome: 'Airbnb', emoji: '📱', colore: '#FF5A5F', tipo: 'entrata', tassa: 'si' },
                { id: 'altro', nome: 'Altro OTA', emoji: '🔗', colore: '#607D8B', tipo: 'entrata', tassa: 'si' },
                { id: 'beyond', nome: 'Beyond', emoji: '✨', colore: '#9C27B0', tipo: 'uscita', tassa: 'no' },
                { id: 'booking', nome: 'Booking', emoji: '🌐', colore: '#003580', tipo: 'entrata', tassa: 'si' },
                { id: 'diretta', nome: 'Diretta', emoji: '💻', colore: '#4CAF50', tipo: 'entrata', tassa: 'no' },
                { id: 'hometogo', nome: 'HomeToGo', emoji: '🏡', colore: '#00BCD4', tipo: 'entrata', tassa: 'si' },
                { id: 'misterbnb', nome: 'MisterB&B', emoji: '🌈', colore: '#FF4081', tipo: 'entrata', tassa: 'si' },
                { id: 'vrbo', nome: 'Vrbo', emoji: '🏠', colore: '#3F51B5', tipo: 'entrata', tassa: 'si' },
            ],
            impostazioni: {
                tassaLove: 2.50,
                tassaTart: 2.00,
                usciteAutomatiche: [
                    {
                        struttura: 'tart',
                        categoria: '📡 Internet',
                        descrizione: 'Abbonamento Internet mensile Tartaruga',
                        importo: 7.00,
                        giorno: 1,
                        dalMese: 2,
                        dalAnno: 2026
                    }
                ]
            },
            import_config: {}
        };

        let extraTipo = null;

        
        // ========== HELPER FUNCTIONS ==========
        
        function getNettoRicevuto(prenotazione) {
            // Per Airbnb Love Nest, usa ricevuto_airbnb (quello effettivamente ricevuto)
            if (prenotazione.ota === 'Airbnb' && prenotazione.struttura === 'love' && prenotazione.ricevuto_airbnb) {
                return parseFloat(prenotazione.ricevuto_airbnb);
            }
            // Per tutte le altre, usa netto_ota o netto
            return parseFloat(prenotazione.netto_ota || prenotazione.netto || 0);
        }
        let extraModalMode = 'new';
        let currentExtraId = null;
        let currentAnno = 2026;
        let currentOtaEdit = null;
        let currentMese = new Date().getMonth() + 1;
        let editingPrenotazione = null;        
        // ========== USCITE AUTOMATICHE MENSILI ==========
        
        function generaUsciteAutomatiche() {
            // Genera uscite mensili automatiche se non esistono già
            const oggi = new Date();
            const annoCorrente = oggi.getFullYear();
            const meseCorrente = oggi.getMonth() + 1;
            
            // Internet Tartaruga: €7/mese da febbraio 2026
            if (annoCorrente >= 2026) {
                for (let mese = 2; mese <= 12; mese++) {
                    // Salta i mesi futuri
                    if (annoCorrente === 2026 && mese > meseCorrente) continue;
                    
                    const data = `${annoCorrente}-${String(mese).padStart(2, '0')}-01`;
                    
                    // Verifica se esiste già
                    const esiste = extraDb.uscite.find(u => 
                        u.data === data && 
                        u.categoria === '📡 Internet' && 
                        u.struttura === 'tart'
                    );
                    
                    if (!esiste) {
                        const nomiMesi = ['', 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 
                                         'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                        
                        extraDb.uscite.push({
                            data: data,
                            struttura: 'tart',
                            categoria: '📡 Internet',
                            descrizione: `Abbonamento Internet mensile Tartaruga - ${nomiMesi[mese]} ${annoCorrente} (automatico)`,
                            importo: 7.00,
                            anno: annoCorrente,
                            automatico: true
                        });
                        
                        console.log(`✅ Aggiunta uscita automatica: Internet ${nomiMesi[mese]} ${annoCorrente}`);
                    }
                }
            }
        }
        
        // ========== IMPORT CSV ==========
        
        function mostraImportCSV() {
            const html = `
                <div class="card">
                    <h3>📤 Import CSV Prenotazioni</h3>
                    <p style="color: #666; margin-bottom: 20px;">
                        Importa nuovi CSV da Booking e Airbnb. I file verranno processati automaticamente 
                        con i calcoli corretti per ciascuna OTA.
                    </p>
                    
                    <div class="form-group">
                        <label>📁 CSV Booking Love Nest</label>
                        <input type="file" id="csv-booking-love" accept=".csv">
                        <small>Formato: statements.csv da Booking.com</small>
                    </div>
                    
                    <div class="form-group">
                        <label>📁 CSV Booking La Tartaruga</label>
                        <input type="file" id="csv-booking-tart" accept=".csv">
                        <small>Formato: statements.csv da Booking.com</small>
                    </div>
                    
                    <div class="form-group">
                        <label>📁 CSV Airbnb (tutte le strutture)</label>
                        <input type="file" id="csv-airbnb" accept=".csv">
                        <small>Formato: transazioni esportate da Airbnb</small>
                    </div>
                    
                    <button class="btn btn-primary btn-block" onclick="processaCSVImport()">
                        🚀 Importa e Processa
                    </button>
                    
                    <div id="import-status" style="margin-top: 20px;"></div>
                </div>
            `;
            
            document.getElementById('tab-import-csv').innerHTML = html;
        }
        
        function processaCSVImport() {
            const statusDiv = document.getElementById('import-status');
            statusDiv.innerHTML = '<p style="color: #FF9800;">⏳ Funzione in sviluppo...</p><p>Per ora, per importare nuovi CSV:</p><ol><li>Carica i CSV su Claude</li><li>Chiedi di processarli con gli stessi calcoli</li><li>Aggiorna il gestionale con i nuovi dati</li></ol><p style="color: #4CAF50; margin-top: 20px;"><strong>💡 Suggerimento:</strong> Salva regolarmente un backup (tab Export → Backup JSON) così non perdi i dati!</p>';
        }
        
        // Modifica la funzione getNettoRicevuto per gestire anche Tartaruga
        function getNettoRicevuto(prenotazione) {
            // Per Airbnb Love Nest, usa ricevuto_airbnb
            if (prenotazione.ota === 'Airbnb' && prenotazione.struttura === 'love' && prenotazione.ricevuto_airbnb) {
                return parseFloat(prenotazione.ricevuto_airbnb);
            }
            // Per tutte le altre, usa netto_ota o netto
            return parseFloat(prenotazione.netto_ota || prenotazione.netto || 0);
        }
        
        function getTassaSoggiorno(prenotazione) {
            // Airbnb Tartaruga: mostra la tassa anche se pagata da Airbnb
            if (prenotazione.ota === 'Airbnb' && prenotazione.struttura === 'tart' && prenotazione.tassa_soggiorno_airbnb) {
                return {
                    importo: parseFloat(prenotazione.tassa_soggiorno_airbnb),
                    pagataDaAirbnb: true
                };
            }
            // Love Nest e altri: tassa da versare
            return {
                importo: parseFloat(prenotazione.tasse_da_versare || 0),
                pagataDaAirbnb: false
            };
        }

        
        // ========== FUNZIONI BASE ==========
        
        function updateCalcPreview() {
            const otaNome = document.getElementById('insert-ota').value;
            const strutt = document.getElementById('insert-struttura').value;
            const anno = parseInt(document.getElementById('insert-anno').value) || currentAnno;
            const osp = parseInt(document.getElementById('insert-ospiti').value) || 2;
            const notti = parseInt(document.getElementById('insert-notti').value) || 1;
            const impNetto = parseFloat(document.getElementById('insert-importo').value) || 0;
            
            const otaConfig = config.ota.find(o => o.nome === otaNome);
            
            if (!otaConfig) {
                document.getElementById('calc-preview').innerHTML = 'ℹ️ Seleziona un OTA valido';
                return;
            }
            
            // Determina tariffa tasse in base all'anno e struttura
            let tassaPerNotte = 0;
            if (strutt === 'love') {
                tassaPerNotte = anno >= 2026 ? 2.50 : 2.00;
            } else {
                tassaPerNotte = 2.00;
            }
            
            const tasseSoggiorno = osp * notti * tassaPerNotte;
            let info = '';
            
            if (otaNome === 'Airbnb') {
                if (strutt === 'love') {
                    info = `✅ <strong>${otaConfig.emoji} ${otaNome} (Love Nest)</strong><br>
                            <strong>NETTO ricevuto da Airbnb: €${impNetto.toFixed(2)}</strong><br>
                            Include tasse di soggiorno: €${tasseSoggiorno.toFixed(2)}<br>
                            <strong>NETTO FINALE TUO: €${(impNetto - tasseSoggiorno).toFixed(2)}</strong><br>
                            <small>Nota: Devi versare €${tasseSoggiorno.toFixed(2)} al comune</small>`;
                } else {
                    info = `✅ <strong>${otaConfig.emoji} ${otaNome} (Tartaruga)</strong><br>
                            <strong>NETTO ricevuto da Airbnb: €${impNetto.toFixed(2)}</strong><br>
                            ✅ Airbnb paga direttamente le tasse al comune<br>
                            <strong>NETTO FINALE TUO: €${impNetto.toFixed(2)}</strong><br>
                            <small>Nota: Airbnb versa €${tasseSoggiorno.toFixed(2)} al comune per te</small>`;
                }
            } else if (otaNome === 'Booking') {
                info = `✅ <strong>${otaConfig.emoji} ${otaNome}</strong><br>
                        <strong>IMPORT INSERITO (già al netto cedolare): €${impNetto.toFixed(2)}</strong><br>
                        Tasse di soggiorno da incassare: €${tasseSoggiorno.toFixed(2)}<br>
                        <strong>NETTO FINALE TUO: €${impNetto.toFixed(2)}</strong><br>
                        <small>Nota: Devi versare €${tasseSoggiorno.toFixed(2)} al comune</small>`;
            } else if (otaNome === 'Diretta') {
                info = `✅ <strong>${otaConfig.emoji} ${otaNome}</strong><br>
                        <strong>TOTALE ricevuto: €${impNetto.toFixed(2)}</strong><br>
                        ✅ Nessuna tassa di soggiorno!<br>
                        <strong>NETTO FINALE TUO: €${impNetto.toFixed(2)}</strong>`;
            } else if (otaConfig.tipo === 'uscita') {
                info = `⚠️ <strong>${otaConfig.emoji} ${otaNome} è un'uscita!</strong><br>
                        Importo: €${impNetto.toFixed(2)}<br>
                        Verrà registrato nelle uscite extra`;
            } else {
                info = `ℹ️ <strong>${otaConfig.emoji} ${otaNome}</strong><br>
                        Netto ricevuto: €${impNetto.toFixed(2)}<br>
                        Tasse soggiorno: €${tasseSoggiorno.toFixed(2)}`;
            }
            
            document.getElementById('calc-preview').innerHTML = info;
        }
        
        function inserisciPrenotazione() {
            const data = document.getElementById('insert-data').value;
            const otaNome = document.getElementById('insert-ota').value;
            const strutt = document.getElementById('insert-struttura').value;
            const anno = document.getElementById('insert-anno').value;
            const osp = parseInt(document.getElementById('insert-ospiti').value) || 2;
            const notti = parseInt(document.getElementById('insert-notti').value) || 1;
            const impNetto = parseFloat(document.getElementById('insert-importo').value);
            const ospite = document.getElementById('insert-ospite').value.trim();
            const note = document.getElementById('insert-note').value;
            
            if (!data || !impNetto || !ospite) { 
                alert('❌ Compila tutti i campi obbligatori!'); 
                return; 
            }
            
            const otaConfig = config.ota.find(o => o.nome === otaNome);
            
            if (!otaConfig) {
                alert('❌ OTA non valida!');
                return;
            }
            
            if (otaConfig.tipo === 'uscita') {
                const conferma = confirm(`${otaConfig.emoji} ${otaNome} è una spesa. Registrare come uscita extra?`);
                if (conferma) {
                    const extraData = {
                        data: data,
                        importo: impNetto,
                        anno: parseInt(anno),
                        struttura: strutt,
                        categoria: `${otaConfig.emoji} ${otaNome}`,
                        descrizione: `Commissione ${otaNome} - ${ospite}`,
                        note: note
                    };
                    
                    extraDb.uscite.push(extraData);
                    extraDb.uscite.sort((a, b) => new Date(b.data) - new Date(a.data));
                    saveToStorage();
                    updateAll();
                    
                    alert(`✅ Uscita ${otaNome} registrata!\nImporto: €${impNetto.toFixed(2)}`);
                    
                    document.getElementById('insert-importo').value = '';
                    document.getElementById('insert-ospite').value = '';
                    document.getElementById('insert-note').value = '';
                }
                return;
            }
            
            // Calcola tasse in base a struttura, anno e OTA
            let tassaPerNotte = 0;
            if (strutt === 'love') {
                tassaPerNotte = anno >= 2026 ? 2.50 : 2.00;
            } else {
                tassaPerNotte = 2.00;
            }
            
            let tasseSoggiorno = 0;
            let nettoFinale = impNetto;
            
            if (otaNome === 'Airbnb') {
                if (strutt === 'love') {
                    tasseSoggiorno = osp * notti * tassaPerNotte;
                    nettoFinale = impNetto - tasseSoggiorno;
                } else {
                    tasseSoggiorno = 0;
                    nettoFinale = impNetto;
                }
            } else if (otaNome === 'Booking') {
                tasseSoggiorno = osp * notti * tassaPerNotte;
                nettoFinale = impNetto;
            } else if (otaNome === 'Diretta') {
                tasseSoggiorno = 0;
                nettoFinale = impNetto;
            } else if (otaConfig.tassa === 'si') {
                tasseSoggiorno = osp * notti * tassaPerNotte;
                nettoFinale = impNetto;
            }
            
            const key = strutt + '_' + anno;
            if (!db[key]) db[key] = [];
            
            const nuovaPrenotazione = {
                data: data,
                ota: otaNome,
                netto: impNetto,
                tasse_da_versare: tasseSoggiorno,
                netto_finale: nettoFinale,
                ospiti: osp,
                notti: notti,
                ospite: ospite,
                note: note || ''
            };
            
            db[key].push(nuovaPrenotazione);
            db[key].sort((a, b) => new Date(b.data) - new Date(a.data));
            
            saveToStorage();
            updateAll();
            
            let msg = `✅ Inserito!\n\n📊 Dettagli:\n- Netto finale tuo: €${nettoFinale.toFixed(2)}`;
            if (tasseSoggiorno > 0) {
                msg += `\n- Tasse da versare al comune: €${tasseSoggiorno.toFixed(2)}`;
            }
            
            alert(msg);
            
            document.getElementById('insert-importo').value = '';
            document.getElementById('insert-ospite').value = '';
            document.getElementById('insert-note').value = '';
            updateCalcPreview();
            
            showTab('prenotazioni');
        }
        
        function loadFromStorage() {
            // Controllo versione: se diversa, forza ricarica dati freschi
            const savedVersion = localStorage.getItem('db-version');
            if (savedVersion !== DB_VERSION.toString()) {
                console.log(`🔄 Nuova versione DB rilevata (v${DB_VERSION}). Caricamento dati freschi...`);
                localStorage.clear();
                localStorage.setItem('db-version', DB_VERSION.toString());
                saveToStorage();
                return;
            }
            
            const savedDb = localStorage.getItem('gestionale-data');
            const savedExtra = localStorage.getItem('gestionale-extra');
            const savedConfig = localStorage.getItem('gestionale-config');
            
            if (savedDb) db = JSON.parse(savedDb);
            if (savedExtra) extraDb = JSON.parse(savedExtra);
            if (savedConfig) config = JSON.parse(savedConfig);
            
            if (!config.anni || config.anni.length === 0) {
                config.anni = [2026];
            }
            
            if (!config.impostazioni) {
                config.impostazioni = {
                    tassaLove: 2.50,
                    tassaTart: 2.00
                };
            }
            
            if (!config.ota || config.ota.length === 0) {
                config.ota = [
                    { id: 'airbnb', nome: 'Airbnb', emoji: '📱', colore: '#FF5A5F', tipo: 'entrata', tassa: 'si' },
                    { id: 'booking', nome: 'Booking', emoji: '🌐', colore: '#003580', tipo: 'entrata', tassa: 'si' },
                    { id: 'diretta', nome: 'Diretta', emoji: '💻', colore: '#4CAF50', tipo: 'entrata', tassa: 'no' },
                    { id: 'beyond', nome: 'Beyond', emoji: '✨', colore: '#9C27B0', tipo: 'uscita', tassa: 'no' }
                ];
            }
            
            currentAnno = config.annoCorrente || new Date().getFullYear();
            updateAnniFromData();
        }
        
        function updateAnniFromData() {
            const anniSet = new Set();
            Object.keys(db).forEach(key => {
                const anno = key.split('_')[1];
                if (anno) anniSet.add(parseInt(anno));
            });
            
            anniSet.forEach(anno => {
                if (!config.anni.includes(anno)) {
                    config.anni.push(anno);
                }
            });
            
            config.anni.sort((a, b) => b - a);
            
            if (!config.anni.includes(currentAnno) && config.anni.length > 0) {
                currentAnno = config.anni[0];
            }
        }
        
        function saveToStorage() {
            localStorage.setItem('gestionale-data', JSON.stringify(db));
            localStorage.setItem('gestionale-extra', JSON.stringify(extraDb));
            localStorage.setItem('gestionale-config', JSON.stringify(config));
        }
        
        // ========== AGGIORNA DATI ==========
        
        function aggiornaDataOra() {
            if (confirm('Questa operazione cancellerà la cache e ricaricherà i dati aggiornati.\n\nContinuare?')) {
                localStorage.clear();
                localStorage.setItem('db-version', '14');
                alert('✅ Cache cancellata! La pagina si ricaricherà ora.');
                location.reload();
            }
        }
        
        function controllaBannerAggiornamento() {
            const savedVersion = localStorage.getItem('db-version');
            const banner = document.getElementById('update-banner');
            
            // Mostra banner se versione != 14
            if (savedVersion !== '14' && banner) {
                banner.style.display = 'block';
                console.log('⚠️ BANNER MOSTRATO: Dati vecchi rilevati');
            } else if (banner) {
                banner.style.display = 'none';
            }
        }
        
        // ========== INIZIALIZZAZIONE ==========
        
        function init() {
            loadFromStorage();
            generaUsciteAutomatiche(); // Genera uscite mensili automatiche
            setupAnni();
            updateAll();
            setupSelects();
            setupImpostazioni();
            document.getElementById('current-anno-display').textContent = currentAnno;
            
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('insert-data').value = today;
            document.getElementById('extra-data').value = today;
            
            // Controlla se mostrare banner aggiornamento
            controllaBannerAggiornamento();
            
            console.log('✅ Sistema inizializzato');
        }
        
        function setupAnni() {
            const anniSelect = document.getElementById('insert-anno');
            const extraAnnoSelect = document.getElementById('extra-anno');
            const filterSelect = document.getElementById('filter-select');
            const exportSelect = document.getElementById('export-select');
            const annoPredSelect = document.getElementById('anno-pred');
            const analisiAnnoSelector = document.getElementById('analisi-anno-selector');
            
            anniSelect.innerHTML = '';
            extraAnnoSelect.innerHTML = '';
            filterSelect.innerHTML = '<option value="">Tutte le prenotazioni</option>';
            exportSelect.innerHTML = '<option value="all">Tutti i dati</option>';
            annoPredSelect.innerHTML = '';
            analisiAnnoSelector.innerHTML = '';
            
            const anniOrdinati = [...config.anni].sort((a, b) => b - a);
            
            anniOrdinati.forEach(anno => {
                const option1 = document.createElement('option');
                option1.value = anno;
                option1.textContent = anno;
                if (anno === currentAnno) option1.selected = true;
                anniSelect.appendChild(option1);
                
                const option2 = document.createElement('option');
                option2.value = anno;
                option2.textContent = anno;
                if (anno === currentAnno) option2.selected = true;
                extraAnnoSelect.appendChild(option2);
                
                const option3 = document.createElement('option');
                option3.value = anno;
                option3.textContent = anno;
                if (anno === config.annoCorrente) option3.selected = true;
                annoPredSelect.appendChild(option3);
                
                if (db[`love_${anno}`] && db[`love_${anno}`].length > 0) {
                    const optionLove = document.createElement('option');
                    optionLove.value = `love_${anno}`;
                    optionLove.textContent = `💕 Love Nest ${anno}`;
                    filterSelect.appendChild(optionLove);
                }
                
                if (db[`tart_${anno}`] && db[`tart_${anno}`].length > 0) {
                    const optionTart = document.createElement('option');
                    optionTart.value = `tart_${anno}`;
                    optionTart.textContent = `🐢 Tartaruga ${anno}`;
                    filterSelect.appendChild(optionTart);
                }
                
                if (db[`love_${anno}`] && db[`love_${anno}`].length > 0) {
                    const optionExport = document.createElement('option');
                    optionExport.value = `love_${anno}`;
                    optionExport.textContent = `Love Nest ${anno}`;
                    exportSelect.appendChild(optionExport);
                }
                
                if (db[`tart_${anno}`] && db[`tart_${anno}`].length > 0) {
                    const optionExport = document.createElement('option');
                    optionExport.value = `tart_${anno}`;
                    optionExport.textContent = `Tartaruga ${anno}`;
                    exportSelect.appendChild(optionExport);
                }
                
                const btnAnno = document.createElement('button');
                btnAnno.className = `anno-btn ${anno === currentAnno ? 'active' : ''}`;
                btnAnno.textContent = anno;
                btnAnno.onclick = () => {
                    currentAnno = anno;
                    document.querySelectorAll('#analisi-anno-selector .anno-btn').forEach(b => b.classList.remove('active'));
                    btnAnno.classList.add('active');
                    updateAnalisiMese();
                };
                analisiAnnoSelector.appendChild(btnAnno);
            });
            
            exportSelect.innerHTML += `
                <option value="extra_entrate">Entrate Extra</option>
                <option value="extra_uscite">Uscite Extra</option>
                <option value="dirette">Prenotazioni Dirette</option>
            `;
            
            const annoSelector = document.getElementById('anno-selector');
            annoSelector.innerHTML = '';
            anniOrdinati.forEach(anno => {
                const btn = document.createElement('button');
                btn.className = `anno-btn ${anno === currentAnno ? 'active' : ''}`;
                btn.textContent = anno;
                btn.onclick = () => {
                    currentAnno = anno;
                    document.querySelectorAll('.anno-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    document.getElementById('current-anno-display').textContent = anno;
                    updateDashboard();
                    updateExtra();
                };
                annoSelector.appendChild(btn);
            });
            
            const extraAnnoSelector = document.getElementById('extra-anno-selector');
            extraAnnoSelector.innerHTML = '';
            anniOrdinati.forEach(anno => {
                const btn = document.createElement('button');
                btn.className = `anno-btn ${anno === currentAnno ? 'active' : ''}`;
                btn.textContent = anno;
                btn.onclick = () => {
                    currentAnno = anno;
                    document.querySelectorAll('.anno-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    updateExtra();
                };
                extraAnnoSelector.appendChild(btn);
            });
        }
        
        function setupSelects() {
            const otaSelect = document.getElementById('insert-ota');
            const filterOtaSelect = document.getElementById('filter-ota');
            
            otaSelect.innerHTML = '';
            filterOtaSelect.innerHTML = '<option value="">Tutte le OTA</option>';
            
            config.ota.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(ota => {
                const option1 = document.createElement('option');
                option1.value = ota.nome;
                option1.textContent = `${ota.emoji} ${ota.nome}`;
                otaSelect.appendChild(option1);
                
                const option2 = document.createElement('option');
                option2.value = ota.nome;
                option2.textContent = `${ota.emoji} ${ota.nome}`;
                filterOtaSelect.appendChild(option2);
            });
            
            const servizioSelect = document.getElementById('extra-servizio');
            servizioSelect.innerHTML = '';
            config.servizi.forEach(servizio => {
                const option = document.createElement('option');
                option.value = servizio;
                option.textContent = servizio;
                servizioSelect.appendChild(option);
            });
            
            const clienteSelect = document.getElementById('extra-cliente');
            clienteSelect.innerHTML = '';
            config.clienti.forEach(cliente => {
                const option = document.createElement('option');
                option.value = cliente;
                option.textContent = cliente;
                clienteSelect.appendChild(option);
            });
            
            const categoriaSelect = document.getElementById('extra-categoria');
            categoriaSelect.innerHTML = '';
            config.categorie.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria;
                option.textContent = categoria;
                categoriaSelect.appendChild(option);
            });
        }
        
        function setupImpostazioni() {
            document.getElementById('tassa-love').value = config.impostazioni.tassaLove;
            document.getElementById('tassa-tart').value = config.impostazioni.tassaTart;
        }
        
        function updateAll() {
            if (config.anni && config.anni.length > 0) {
                const anniOrdinati = [...config.anni].sort((a, b) => b - a);
                if (!anniOrdinati.includes(currentAnno)) {
                    currentAnno = anniOrdinati[0];
                }
            }
            
            document.getElementById('current-anno-display').textContent = currentAnno;
            updateDashboard();
            filterPrenotazioni();
            updateExtra();
            updateOtaList();
            updateAnalisiMese();
        }
        
        function showTab(tabName) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('[id^="tab-"]').forEach(t => t.classList.add('hidden'));
            document.getElementById('tab-' + tabName).classList.remove('hidden');
            
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                if (tab.textContent.includes(tabName === 'dashboard' ? 'Dashboard' :
                    tabName === 'prenotazioni' ? 'Prenotazioni' :
                    tabName === 'analisi-mese' ? 'Analisi Mese' :
                    tabName === 'extra' ? 'Extra' :
                    tabName === 'inserisci' ? 'Inserisci' :
                    tabName === 'export' ? 'Export' : 'Configura')) {
                    tab.classList.add('active');
                }
            });
            
            if (tabName === 'analisi-mese') {
                updateAnalisiMese();
            } else if (tabName === 'inserisci') {
                if (!editingPrenotazione) {
                    const today = new Date().toISOString().split('T')[0];
                    document.getElementById('insert-data').value = today;
                    document.getElementById('insert-ospiti').value = 2;
                    document.getElementById('insert-notti').value = 1;
                    document.getElementById('insert-importo').value = '';
                    document.getElementById('insert-ospite').value = '';
                    document.getElementById('insert-note').value = '';
                    
                    const btn = document.getElementById('btn-inserisci');
                    btn.textContent = '✅ Inserisci Prenotazione';
                    btn.onclick = inserisciPrenotazione;
                }
            }
        }
        
        function calcolaTotali(prenotazioni) {
            let totaleNettoRicevuto = 0;
            let totaleTasseDaVersare = 0;
            let totaleNettoFinale = 0;
            
            if (!prenotazioni || prenotazioni.length === 0) {
                return { netto_ricevuto: 0, tasse: 0, netto_finale: 0 };
            }
            
            prenotazioni.forEach(p => {
                // Escludi dirette dal totale strutture (solo OTA)
                if (p.ota === 'Diretta') return;
                
                const nettoRicevuto = getNettoRicevuto(p);
                const tasse = parseFloat(p.tasse_da_versare || 0);
                const nettoFinale = parseFloat(p.netto_finale || nettoRicevuto);
                
                totaleNettoRicevuto += nettoRicevuto;
                totaleTasseDaVersare += tasse;
                totaleNettoFinale += nettoFinale;
            });
            
            return { 
                netto_ricevuto: totaleNettoRicevuto, 
                tasse: totaleTasseDaVersare, 
                netto_finale: totaleNettoFinale 
            };
        }
        
        function calcolaSpeseAnno(anno) {
            return extraDb.uscite
                .filter(e => {
                    const annoExtra = e.anno || new Date(e.data).getFullYear();
                    return annoExtra === anno;
                })
                .reduce((sum, e) => sum + parseFloat(e.importo), 0);
        }
        
        function calcolaEntrateExtraAnno(anno) {
            return extraDb.entrate
                .filter(e => {
                    const annoExtra = e.anno || new Date(e.data).getFullYear();
                    return annoExtra === anno;
                })
                .reduce((sum, e) => sum + parseFloat(e.importo), 0);
        }
        
        function calcolaDiretteAnno(anno) {
            let totaleDirette = 0;
            Object.keys(db).forEach(key => {
                if (key.includes(`_${anno}`)) {
                    db[key].forEach(p => {
                        if (p.ota === 'Diretta') {
                            totaleDirette += parseFloat(p.netto_finale || p.netto_ricevuto || p.netto || 0);
                        }
                    });
                }
            });
            return totaleDirette;
        }
        
        function contaPrenotazioniDirette(anno) {
            let count = 0;
            Object.keys(db).forEach(key => {
                if (key.includes(`_${anno}`)) {
                    db[key].forEach(p => {
                        if (p.ota === 'Diretta') {
                            count++;
                        }
                    });
                }
            });
            return count;
        }
        
        function updateDashboard() {
            const statsContainer = document.getElementById('dashboard-stats');
            const otaStatsContainer = document.getElementById('ota-stats');
            
            statsContainer.innerHTML = '';
            otaStatsContainer.innerHTML = '';
            
            const loveAnno = calcolaTotali(db[`love_${currentAnno}`] || []);
            const tartAnno = calcolaTotali(db[`tart_${currentAnno}`] || []);
            const diretteAnno = calcolaDiretteAnno(currentAnno);
            const speseAnno = calcolaSpeseAnno(currentAnno);
            const entrateExtraAnno = calcolaEntrateExtraAnno(currentAnno);
            
            const totaleStruttureNetto = loveAnno.netto_finale + tartAnno.netto_finale;
            const totaleReale = totaleStruttureNetto + entrateExtraAnno - speseAnno;
            
            const cardLove = document.createElement('div');
            cardLove.className = 'stat-card love';
            cardLove.onclick = () => {
                document.getElementById('filter-select').value = `love_${currentAnno}`;
                showTab('prenotazioni');
                setTimeout(() => filterPrenotazioni(), 100);
            };
            cardLove.innerHTML = `
                <div class="stat-label">Love Nest ${currentAnno}</div>
                <div class="stat-value">€${loveAnno.netto_finale.toFixed(2)}</div>
                <div class="stat-label">${(db[`love_${currentAnno}`]?.filter(p => p.ota !== 'Diretta').length || 0)} pren OTA</div>
            `;
            statsContainer.appendChild(cardLove);
            
            const cardTart = document.createElement('div');
            cardTart.className = 'stat-card tart';
            cardTart.onclick = () => {
                document.getElementById('filter-select').value = `tart_${currentAnno}`;
                showTab('prenotazioni');
                setTimeout(() => filterPrenotazioni(), 100);
            };
            cardTart.innerHTML = `
                <div class="stat-label">Tartaruga ${currentAnno}</div>
                <div class="stat-value">€${tartAnno.netto_finale.toFixed(2)}</div>
                <div class="stat-label">${(db[`tart_${currentAnno}`]?.filter(p => p.ota !== 'Diretta').length || 0)} pren OTA</div>
            `;
            statsContainer.appendChild(cardTart);
            
            const cardDirette = document.createElement('div');
            cardDirette.className = 'stat-card dirette';
            cardDirette.onclick = () => {
                showTab('prenotazioni');
                setTimeout(() => {
                    document.getElementById('filter-ota').value = 'Diretta';
                    filterPrenotazioni();
                }, 100);
            };
            cardDirette.innerHTML = `
                <div class="stat-label">Prenotazioni Dirette</div>
                <div class="stat-value">€${diretteAnno.toFixed(2)}</div>
                <div class="stat-label">${contaPrenotazioniDirette(currentAnno)} pren</div>
            `;
            statsContainer.appendChild(cardDirette);
            
            const cardAirbnb = document.createElement('div');
            cardAirbnb.className = 'stat-card';
            cardAirbnb.style.background = 'linear-gradient(135deg, #FF5A5F 0%, #FF385C 100%)';
            cardAirbnb.onclick = () => {
                document.getElementById('filter-ota').value = 'Airbnb';
                showTab('prenotazioni');
                setTimeout(() => filterPrenotazioni(), 100);
            };
            
            let airbnbAnno = 0;
            Object.keys(db).forEach(key => {
                if (key.includes(`_${currentAnno}`)) {
                    db[key].forEach(p => {
                        if (p.ota === 'Airbnb') {
                            const netto = parseFloat(p.netto_finale || p.netto || 0);
                            airbnbAnno += netto;
                        }
                    });
                }
            });
            
            cardAirbnb.innerHTML = `
                <div class="stat-label">Airbnb NETTO ${currentAnno}</div>
                <div class="stat-value">€${airbnbAnno.toFixed(2)}</div>
                <div class="stat-label">Netto finale</div>
            `;
            statsContainer.appendChild(cardAirbnb);
            
            const cardBooking = document.createElement('div');
            cardBooking.className = 'stat-card';
            cardBooking.style.background = 'linear-gradient(135deg, #003580 0%, #0056b3 100%)';
            cardBooking.onclick = () => {
                document.getElementById('filter-ota').value = 'Booking';
                showTab('prenotazioni');
                setTimeout(() => filterPrenotazioni(), 100);
            };
            
            let bookingAnno = 0;
            Object.keys(db).forEach(key => {
                if (key.includes(`_${currentAnno}`)) {
                    db[key].forEach(p => {
                        if (p.ota === 'Booking') {
                            const netto = parseFloat(p.netto_finale || p.netto || 0);
                            bookingAnno += netto;
                        }
                    });
                }
            });
            
            cardBooking.innerHTML = `
                <div class="stat-label">Booking NETTO ${currentAnno}</div>
                <div class="stat-value">€${bookingAnno.toFixed(2)}</div>
                <div class="stat-label">Netto finale</div>
            `;
            statsContainer.appendChild(cardBooking);
            
            const cardEntrateExtra = document.createElement('div');
            cardEntrateExtra.className = 'stat-card extra-in';
            cardEntrateExtra.onclick = () => {
                showTab('extra');
                setTimeout(() => {
                    document.getElementById('sezione-entrate').scrollIntoView({ behavior: 'smooth' });
                }, 100);
            };
            cardEntrateExtra.innerHTML = `
                <div class="stat-label">Entrate Extra</div>
                <div class="stat-value">€${entrateExtraAnno.toFixed(2)}</div>
                <div class="stat-label">Servizi extra</div>
            `;
            statsContainer.appendChild(cardEntrateExtra);
            
            const cardSpese = document.createElement('div');
            cardSpese.className = 'stat-card extra-out';
            cardSpese.onclick = () => {
                showTab('extra');
                setTimeout(() => {
                    const usciteSection = document.querySelector('#tab-extra h4:nth-child(4)');
                    if (usciteSection) usciteSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            };
            cardSpese.innerHTML = `
                <div class="stat-label">Spese ${currentAnno}</div>
                <div class="stat-value">€${speseAnno.toFixed(2)}</div>
                <div class="stat-label">Tasse/bollette/manut.</div>
            `;
            statsContainer.appendChild(cardSpese);
            
            const cardTotaleReale = document.createElement('div');
            cardTotaleReale.className = 'stat-card total';
            cardTotaleReale.onclick = () => {
                showTab('analisi-mese');
                setTimeout(() => {
                    mostraAnalisiAnnoCompleto(currentAnno);
                }, 100);
            };
            cardTotaleReale.innerHTML = `
                <div class="stat-label">TOTALE REALE ${currentAnno}</div>
                <div class="stat-value">€${totaleReale.toFixed(2)}</div>
                <div class="stat-label">(Netto + Extra - Spese)</div>
            `;
            statsContainer.appendChild(cardTotaleReale);
            
            const otaStats = {};
            
            config.ota.forEach(ota => {
                if (ota.tipo === 'entrata') {
                    otaStats[ota.nome] = {
                        nome: ota.nome,
                        emoji: ota.emoji,
                        colore: ota.colore,
                        netto: 0,
                        prenotazioni: 0
                    };
                }
            });
            
            Object.keys(db).forEach(key => {
                if (key.includes(`_${currentAnno}`)) {
                    db[key].forEach(p => {
                        if (otaStats[p.ota]) {
                            const netto = parseFloat(p.netto_finale || p.netto || 0);
                            otaStats[p.ota].netto += netto;
                            otaStats[p.ota].prenotazioni += 1;
                        } else if (p.ota) {
                            otaStats[p.ota] = {
                                nome: p.ota,
                                emoji: '🔗',
                                colore: '#607D8B',
                                netto: parseFloat(p.netto_finale || p.netto || 0),
                                prenotazioni: 1
                            };
                        }
                    });
                }
            });
            
            const otaConPrenotazioni = Object.values(otaStats).filter(ota => ota.prenotazioni > 0);
            otaConPrenotazioni.sort((a, b) => b.netto - a.netto);
            
            otaConPrenotazioni.forEach(ota => {
                const div = document.createElement('div');
                div.style.display = 'flex';
                div.style.justifyContent = 'space-between';
                div.style.alignItems = 'center';
                div.style.padding = '10px';
                div.style.margin = '5px 0';
                div.style.background = '#f8f9fa';
                div.style.borderRadius = '8px';
                div.style.cursor = 'pointer';
                
                div.onclick = () => {
                    showTab('prenotazioni');
                    setTimeout(() => {
                        document.getElementById('filter-ota').value = ota.nome;
                        filterPrenotazioni();
                    }, 100);
                };
                
                div.innerHTML = `
                    <div>
                        <span style="margin-right: 10px;">${ota.emoji}</span>
                        <strong>${ota.nome}</strong>
                        <small style="margin-left: 10px; color: #666;">${ota.prenotazioni} pren</small>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-weight: bold; color: ${ota.colore}">€${ota.netto.toFixed(2)}</div>
                        <small style="color: #666; font-size: 11px;">Netto finale</small>
                    </div>
                `;
                
                otaStatsContainer.appendChild(div);
            });
        }
        
        function filterPrenotazioni() {
            const filter = document.getElementById('filter-select').value;
            const filterOta = document.getElementById('filter-ota').value;
            const searchOspite = document.getElementById('search-ospite').value.toLowerCase();
            const tbody = document.getElementById('prenotazioni-body');
            tbody.innerHTML = '';
            
            let prenotazioni = [];
            
            if (filter) {
                prenotazioni = db[filter] || [];
                const [struttura, anno] = filter.split('_');
                prenotazioni = prenotazioni.map(p => ({
                    ...p,
                    struttura: struttura,
                    anno: parseInt(anno)
                }));
            } else {
                Object.keys(db).forEach(key => {
                    if (db[key] && db[key].length > 0) {
                        const [struttura, anno] = key.split('_');
                        prenotazioni = prenotazioni.concat(db[key].map(p => ({
                            ...p, 
                            struttura: struttura, 
                            anno: parseInt(anno)
                        })));
                    }
                });
            }
            
            if (filterOta) {
                prenotazioni = prenotazioni.filter(p => p.ota === filterOta);
            }
            
            if (searchOspite) {
                prenotazioni = prenotazioni.filter(p => 
                    p.ospite.toLowerCase().includes(searchOspite)
                );
            }
            
            if (prenotazioni.length === 0) {
                const row = tbody.insertRow();
                row.innerHTML = `<td colspan="8" style="text-align: center; padding: 20px;">Nessuna prenotazione trovata</td>`;
                return;
            }
            
            prenotazioni.sort((a, b) => new Date(b.data) - new Date(a.data));
            
            let totaleNettoRicevuto = 0;
            let totaleTasse = 0;
            let totaleNettoFinale = 0;
            let currentYear = null;
            let currentYearTotalNettoRicevuto = 0;
            let currentYearTotalTasse = 0;
            let currentYearTotalNettoFinale = 0;
            
            prenotazioni.forEach((p, idx) => {
                const year = p.anno;
                // FIX: Per Airbnb Love Nest mostra ricevuto_airbnb
                let nettoRicevuto = 0;
                if (p.ota === 'Airbnb' && p.struttura === 'love' && p.ricevuto_airbnb) {
                    nettoRicevuto = parseFloat(p.ricevuto_airbnb);
                } else {
                    nettoRicevuto = getNettoRicevuto(p);
                }
                const tasse = parseFloat(p.tasse_da_versare || 0);
                const nettoFinale = parseFloat(p.netto_finale || nettoRicevuto);
                
                const otaConfig = config.ota.find(o => o.nome === p.ota) || {
                    emoji: '🔗',
                    colore: '#607D8B'
                };
                
                if (currentYear !== null && currentYear !== year) {
                    const row = tbody.insertRow();
                    row.className = 'year-total';
                    row.innerHTML = `
                        <td colspan="4" style="text-align: right;"><strong>TOTALE ${currentYear}:</strong></td>
                        <td style="color: #4CAF50;">€${currentYearTotalNettoRicevuto.toFixed(2)}</td>
                        <td style="color: #FF9800;">€${currentYearTotalTasse.toFixed(2)}</td>
                        <td style="color: #2196F3;">€${currentYearTotalNettoFinale.toFixed(2)}</td>
                        <td></td>
                    `;
                    
                    currentYearTotalNettoRicevuto = 0;
                    currentYearTotalTasse = 0;
                    currentYearTotalNettoFinale = 0;
                }
                
                if (currentYear === null || currentYear !== year) {
                    currentYear = year;
                    
                    const yearHeader = tbody.insertRow();
                    yearHeader.className = 'month-total';
                    yearHeader.innerHTML = `
                        <td colspan="8" style="text-align: center; background-color: #e3f2fd; font-size: 16px; padding: 10px;">
                            <strong>🎯 ANNO ${year}</strong>
                        </td>
                    `;
                }
                
                const key = `${p.struttura}_${year}`;
                let originalIndex = -1;
                if (db[key]) {
                    originalIndex = db[key].findIndex(item => 
                        item.data === p.data && 
                        item.ospite === p.ospite && 
                        item.ota === p.ota &&
                        Math.abs(parseFloat(item.netto_finale || 0) - nettoFinale) < 0.01
                    );
                }
                
                const row = tbody.insertRow();
                
                // Calcola tasse con info se pagate da Airbnb
                let tasseDisplay = '';
                if (p.ota === 'Airbnb' && p.struttura === 'tart' && p.tassa_soggiorno_airbnb) {
                    tasseDisplay = `<span style="color: #4CAF50;" title="Pagata da Airbnb">€${parseFloat(p.tassa_soggiorno_airbnb).toFixed(2)} <small>✓</small></span>`;
                } else {
                    tasseDisplay = `€${tasse.toFixed(2)}`;
                }
                
                row.innerHTML = `
                    <td>${new Date(p.data).toLocaleDateString('it-IT')}</td>
                    <td>
                        <span class="ota-badge" style="background: ${otaConfig.colore};">
                            ${otaConfig.emoji} ${p.ota}
                        </span>
                    </td>
                    <td>${p.ospite}</td>
                    <td>${p.notti}</td>
                    <td style="color: #4CAF50;">€${nettoRicevuto.toFixed(2)}</td>
                    <td style="color: #FF9800;">${tasseDisplay}</td>
                    <td style="font-weight: bold; color: #2196F3;">€${nettoFinale.toFixed(2)}</td>
                    <td>
                        <button class="btn btn-edit btn-small" onclick="modificaPrenotazione('${key}', ${originalIndex})">✏️</button>
                        <button class="btn btn-delete btn-small" onclick="eliminaPrenotazione('${key}', ${originalIndex})">🗑️</button>
                    </td>
                `;
                
                totaleNettoRicevuto += nettoRicevuto;
                totaleTasse += tasse;
                totaleNettoFinale += nettoFinale;
                
                currentYearTotalNettoRicevuto += nettoRicevuto;
                currentYearTotalTasse += tasse;
                currentYearTotalNettoFinale += nettoFinale;
            });
            
            if (currentYear !== null) {
                const row = tbody.insertRow();
                row.className = 'year-total';
                row.innerHTML = `
                    <td colspan="4" style="text-align: right;"><strong>TOTALE ${currentYear}:</strong></td>
                    <td style="color: #4CAF50;">€${currentYearTotalNettoRicevuto.toFixed(2)}</td>
                    <td style="color: #FF9800;">€${currentYearTotalTasse.toFixed(2)}</td>
                    <td style="color: #2196F3;">€${currentYearTotalNettoFinale.toFixed(2)}</td>
                    <td></td>
                `;
            }
            
            if (!filter && prenotazioni.length > 0) {
                const row = tbody.insertRow();
                row.className = 'year-total';
                row.style.backgroundColor = '#fff3e0';
                row.style.fontSize = '14px';
                row.innerHTML = `
                    <td colspan="4" style="text-align: right;"><strong>TOTALE GENERALE:</strong></td>
                    <td style="color: #4CAF50; font-weight: bold;">€${totaleNettoRicevuto.toFixed(2)}</td>
                    <td style="color: #FF9800; font-weight: bold;">€${totaleTasse.toFixed(2)}</td>
                    <td style="color: #2196F3; font-weight: bold;">€${totaleNettoFinale.toFixed(2)}</td>
                    <td></td>
                `;
            }
        }
        
        function modificaPrenotazione(key, index) {
            const prenotazione = db[key][index];
            
            document.getElementById('insert-data').value = prenotazione.data;
            document.getElementById('insert-ota').value = prenotazione.ota;
            document.getElementById('insert-struttura').value = key.split('_')[0];
            document.getElementById('insert-anno').value = key.split('_')[1];
            document.getElementById('insert-ospiti').value = prenotazione.ospiti;
            document.getElementById('insert-notti').value = prenotazione.notti;
            document.getElementById('insert-importo').value = prenotazione.netto;
            document.getElementById('insert-ospite').value = prenotazione.ospite;
            document.getElementById('insert-note').value = prenotazione.note || '';
            
            editingPrenotazione = { key, index };
            
            const btn = document.getElementById('btn-inserisci');
            btn.textContent = '💾 Aggiorna Prenotazione';
            btn.onclick = aggiornaPrenotazione;
            
            updateCalcPreview();
            showTab('inserisci');
        }
        
        function aggiornaPrenotazione() {
            if (!editingPrenotazione) return;
            
            const { key, index } = editingPrenotazione;
            
            const data = document.getElementById('insert-data').value;
            const otaNome = document.getElementById('insert-ota').value;
            const strutt = document.getElementById('insert-struttura').value;
            const anno = document.getElementById('insert-anno').value;
            const osp = parseInt(document.getElementById('insert-ospiti').value) || 2;
            const notti = parseInt(document.getElementById('insert-notti').value) || 1;
            const impNetto = parseFloat(document.getElementById('insert-importo').value);
            const ospite = document.getElementById('insert-ospite').value.trim();
            const note = document.getElementById('insert-note').value;
            
            if (!data || !impNetto || !ospite) { 
                alert('❌ Compila tutti i campi obbligatori!'); 
                return; 
            }
            
            const otaConfig = config.ota.find(o => o.nome === otaNome);
            
            if (!otaConfig) {
                alert('❌ OTA non valida!');
                return;
            }
            
            let tassaPerNotte = 0;
            if (strutt === 'love') {
                tassaPerNotte = anno >= 2026 ? 2.50 : 2.00;
            } else {
                tassaPerNotte = 2.00;
            }
            
            let tasseSoggiorno = 0;
            let nettoFinale = impNetto;
            
            if (otaNome === 'Airbnb') {
                if (strutt === 'love') {
                    tasseSoggiorno = osp * notti * tassaPerNotte;
                    nettoFinale = impNetto - tasseSoggiorno;
                } else {
                    tasseSoggiorno = 0;
                    nettoFinale = impNetto;
                }
            } else if (otaNome === 'Booking') {
                tasseSoggiorno = osp * notti * tassaPerNotte;
                nettoFinale = impNetto;
            } else if (otaNome === 'Diretta') {
                tasseSoggiorno = 0;
                nettoFinale = impNetto;
            } else if (otaConfig.tassa === 'si') {
                tasseSoggiorno = osp * notti * tassaPerNotte;
                nettoFinale = impNetto;
            }
            
            db[key][index] = {
                data: data,
                ota: otaNome,
                netto: impNetto,
                tasse_da_versare: tasseSoggiorno,
                netto_finale: nettoFinale,
                ospiti: osp,
                notti: notti,
                ospite: ospite,
                note: note || ''
            };
            
            const newKey = strutt + '_' + anno;
            if (newKey !== key) {
                if (!db[newKey]) db[newKey] = [];
                db[newKey].push(db[key][index]);
                db[key].splice(index, 1);
                db[newKey].sort((a, b) => new Date(b.data) - new Date(a.data));
            } else {
                db[key].sort((a, b) => new Date(b.data) - new Date(a.data));
            }
            
            saveToStorage();
            updateAll();
            
            editingPrenotazione = null;
            const btn = document.getElementById('btn-inserisci');
            btn.textContent = '✅ Inserisci Prenotazione';
            btn.onclick = inserisciPrenotazione;
            
            document.getElementById('insert-importo').value = '';
            document.getElementById('insert-ospite').value = '';
            document.getElementById('insert-note').value = '';
            
            alert('✅ Prenotazione aggiornata!');
            showTab('prenotazioni');
        }
        
        function eliminaPrenotazione(key, index) {
            if (!confirm('Sei sicuro di voler eliminare questa prenotazione?')) return;
            
            db[key].splice(index, 1);
            saveToStorage();
            updateAll();
            
            alert('✅ Prenotazione eliminata!');
        }
        
        function updateAnalisiMese() {
            const meseSelector = document.getElementById('mese-selector');
            const analisiContent = document.getElementById('analisi-mese-content');
            
            meseSelector.innerHTML = '';
            analisiContent.innerHTML = '';
            
            for (let mese = 1; mese <= 12; mese++) {
                const nomiMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                                 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                const btn = document.createElement('button');
                btn.className = `mese-tab ${mese === currentMese ? 'active' : ''}`;
                btn.textContent = nomiMesi[mese-1];
                btn.onclick = () => {
                    currentMese = mese;
                    document.querySelectorAll('.mese-tab').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    mostraAnalisiMese(currentAnno, mese);
                };
                meseSelector.appendChild(btn);
            }
            
            const btnAnno = document.createElement('button');
            btnAnno.className = 'mese-tab';
            btnAnno.textContent = 'TUTTO L\'ANNO';
            btnAnno.onclick = () => {
                mostraAnalisiAnnoCompleto(currentAnno);
            };
            meseSelector.appendChild(btnAnno);
            
            mostraAnalisiMese(currentAnno, currentMese);
        }
        
        function mostraAnalisiMese(anno, mese) {
            const analisiContent = document.getElementById('analisi-mese-content');
            const nomiMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                             'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            
            let html = `<h4>${nomiMesi[mese-1]} ${anno}</h4>`;
            
            let prenotazioniMese = [];
            Object.keys(db).forEach(key => {
                if (key.includes(`_${anno}`)) {
                    db[key].forEach(p => {
                        const dataPren = new Date(p.data);
                        if (dataPren.getFullYear() === anno && (dataPren.getMonth() + 1) === mese) {
                            prenotazioniMese.push({
                                ...p,
                                struttura: key.split('_')[0]
                            });
                        }
                    });
                }
            });
            
            if (prenotazioniMese.length === 0) {
                html += `<p style="text-align: center; color: #666; padding: 20px;">Nessuna prenotazione per ${nomiMesi[mese-1]} ${anno}</p>`;
                analisiContent.innerHTML = html;
                return;
            }
            
            let loveNetto = 0;
            let tartNetto = 0;
            let diretteNetto = 0;
            
            prenotazioniMese.forEach(p => {
                const netto = parseFloat(p.netto_finale || p.netto || 0);
                
                if (p.struttura === 'love') {
                    loveNetto += netto;
                    
                    if (p.ota === 'Diretta') {
                        diretteNetto += netto;
                    }
                } else if (p.struttura === 'tart') {
                    tartNetto += netto;
                    
                    if (p.ota === 'Diretta') {
                        diretteNetto += netto;
                    }
                }
            });
            
            const totaleNetto = loveNetto + tartNetto;
            
            html += `
                <div class="stat-grid" style="margin-top: 20px;">
                    <div class="stat-card love">
                        <div class="stat-label">Love Nest</div>
                        <div class="stat-value">€${loveNetto.toFixed(2)}</div>
                        <div class="stat-label">Netto finale</div>
                    </div>
                    <div class="stat-card tart">
                        <div class="stat-label">Tartaruga</div>
                        <div class="stat-value">€${tartNetto.toFixed(2)}</div>
                        <div class="stat-label">Netto finale</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">TOTALE MESE</div>
                        <div class="stat-value">€${totaleNetto.toFixed(2)}</div>
                        <div class="stat-label">Netto finale</div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5>📊 Dettaglio per OTA</h5>
                    <table style="width: 100%; margin-top: 10px;">
                        <thead>
                            <tr>
                                <th>OTA</th>
                                <th>Pren.</th>
                                <th>Netto Finale</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            const otaStats = {};
            prenotazioniMese.forEach(p => {
                if (!otaStats[p.ota]) {
                    otaStats[p.ota] = { count: 0, netto: 0 };
                }
                const netto = parseFloat(p.netto_finale || p.netto || 0);
                
                otaStats[p.ota].count++;
                otaStats[p.ota].netto += netto;
            });
            
            Object.keys(otaStats).sort((a, b) => otaStats[b].netto - otaStats[a].netto).forEach(ota => {
                const stats = otaStats[ota];
                const otaConfig = config.ota.find(o => o.nome === ota) || { emoji: '🔗', colore: '#607D8B' };
                
                html += `
                    <tr>
                        <td><span style="margin-right: 5px;">${otaConfig.emoji}</span> ${ota}</td>
                        <td>${stats.count}</td>
                        <td style="color: #2196F3; font-weight: bold;">€${stats.netto.toFixed(2)}</td>
                    </tr>
                `;
            });
            
            html += `
                        </tbody>
                    </table>
                </div>
                
                <div style="margin-top: 20px;">
                    <h5>📋 Prenotazioni del mese</h5>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Struttura</th>
                                    <th>OTA</th>
                                    <th>Ospite</th>
                                    <th>Netto Finale</th>
                                </tr>
                            </thead>
                            <tbody>
            `;
            
            prenotazioniMese.sort((a, b) => new Date(b.data) - new Date(a.data));
            
            prenotazioniMese.forEach(p => {
                const otaConfig = config.ota.find(o => o.nome === p.ota) || { emoji: '🔗' };
                const netto = parseFloat(p.netto_finale || p.netto || 0);
                const strutturaNome = p.struttura === 'love' ? '💕 Love Nest' : '🐢 Tartaruga';
                
                html += `
                    <tr>
                        <td>${new Date(p.data).toLocaleDateString('it-IT')}</td>
                        <td>${strutturaNome}</td>
                        <td>${otaConfig.emoji} ${p.ota}</td>
                        <td>${p.ospite}</td>
                        <td style="color: #2196F3;">€${netto.toFixed(2)}</td>
                    </tr>
                `;
            });
            
            html += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            
            analisiContent.innerHTML = html;
        }
        
        function mostraAnalisiAnnoCompleto(anno) {
            const analisiContent = document.getElementById('analisi-mese-content');
            const nomiMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                             'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            
            let html = `<h4>ANNO COMPLETO ${anno} - Riepilogo Mensile</h4>`;
            
            html += `
                <div class="table-container" style="margin-top: 20px;">
                    <table>
                        <thead>
                            <tr>
                                <th>Mese</th>
                                <th>Love Nest</th>
                                <th>Tartaruga</th>
                                <th>Totale Netto</th>
                                <th>Pren.</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            let totaleAnnoLove = 0;
            let totaleAnnoTart = 0;
            let totaleAnnoNetto = 0;
            let totaleAnnoPren = 0;
            
            for (let mese = 1; mese <= 12; mese++) {
                let loveNetto = 0, loveCount = 0;
                let tartNetto = 0, tartCount = 0;
                
                Object.keys(db).forEach(key => {
                    if (key.includes(`_${anno}`)) {
                        db[key].forEach(p => {
                            const dataPren = new Date(p.data);
                            if (dataPren.getFullYear() === anno && (dataPren.getMonth() + 1) === mese) {
                                const netto = parseFloat(p.netto_finale || p.netto || 0);
                                const struttura = key.split('_')[0];
                                
                                if (struttura === 'love') {
                                    loveNetto += netto;
                                    loveCount++;
                                } else if (struttura === 'tart') {
                                    tartNetto += netto;
                                    tartCount++;
                                }
                            }
                        });
                    }
                });
                
                const meseNetto = loveNetto + tartNetto;
                const meseCount = loveCount + tartCount;
                
                if (meseCount > 0) {
                    html += `
                        <tr>
                            <td><strong>${nomiMesi[mese-1]}</strong></td>
                            <td style="color: #FF1493;">€${loveNetto.toFixed(2)}</td>
                            <td style="color: #00CED1;">€${tartNetto.toFixed(2)}</td>
                            <td style="color: #2196F3; font-weight: bold;">€${meseNetto.toFixed(2)}</td>
                            <td>${meseCount}</td>
                        </tr>
                    `;
                    
                    totaleAnnoLove += loveNetto;
                    totaleAnnoTart += tartNetto;
                    totaleAnnoNetto += meseNetto;
                    totaleAnnoPren += meseCount;
                }
            }
            
            html += `
                        </tbody>
                        <tfoot>
                            <tr style="background-color: #fff3e0; font-weight: bold;">
                                <td><strong>TOTALE ${anno}</strong></td>
                                <td style="color: #FF1493;">€${totaleAnnoLove.toFixed(2)}</td>
                                <td style="color: #00CED1;">€${totaleAnnoTart.toFixed(2)}</td>
                                <td style="color: #2196F3; font-size: 16px;">€${totaleAnnoNetto.toFixed(2)}</td>
                                <td>${totaleAnnoPren}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            `;
            
            const otaStatsAnno = {};
            Object.keys(db).forEach(key => {
                if (key.includes(`_${anno}`)) {
                    db[key].forEach(p => {
                        if (!otaStatsAnno[p.ota]) {
                            otaStatsAnno[p.ota] = { count: 0, netto: 0 };
                        }
                        const netto = parseFloat(p.netto_finale || p.netto || 0);
                        
                        otaStatsAnno[p.ota].count++;
                        otaStatsAnno[p.ota].netto += netto;
                    });
                }
            });
            
            html += `
                <div style="margin-top: 30px; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5>📊 Riepilogo per OTA - Anno ${anno}</h5>
                    <table style="width: 100%; margin-top: 10px;">
                        <thead>
                            <tr>
                                <th>OTA</th>
                                <th>Pren.</th>
                                <th>Netto Finale</th>
                                <th>% su totale</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            Object.keys(otaStatsAnno).sort((a, b) => otaStatsAnno[b].netto - otaStatsAnno[a].netto).forEach(ota => {
                const stats = otaStatsAnno[ota];
                const otaConfig = config.ota.find(o => o.nome === ota) || { emoji: '🔗', colore: '#607D8B' };
                const percentuale = totaleAnnoNetto > 0 ? (stats.netto / totaleAnnoNetto * 100).toFixed(1) : 0;
                
                html += `
                    <tr>
                        <td><span style="margin-right: 5px;">${otaConfig.emoji}</span> ${ota}</td>
                        <td>${stats.count}</td>
                        <td style="color: #2196F3; font-weight: bold;">€${stats.netto.toFixed(2)}</td>
                        <td>${percentuale}%</td>
                    </tr>
                `;
            });
            
            html += `
                        </tbody>
                    </table>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #2196F3 0%, #0D47A1 100%); color: white; border-radius: 8px;">
                    <h4 style="color: white;">💰 TOTALE ANNO ${anno}</h4>
                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                        <div>
                            <div style="font-size: 12px;">TOTALE NETTO</div>
                            <div style="font-size: 24px; font-weight: bold;">€${totaleAnnoNetto.toFixed(2)}</div>
                        </div>
                        <div>
                            <div style="font-size: 12px;">PRENOTAZIONI</div>
                            <div style="font-size: 24px; font-weight: bold;">${totaleAnnoPren}</div>
                        </div>
                    </div>
                </div>
            `;
            
            analisiContent.innerHTML = html;
        }
        
        function updateExtra() {
            const entrateBody = document.getElementById('entrate-body');
            const usciteBody = document.getElementById('uscite-body');
            
            entrateBody.innerHTML = '';
            usciteBody.innerHTML = '';
            
            const entrateAnno = extraDb.entrate.filter(e => {
                const annoExtra = e.anno || new Date(e.data).getFullYear();
                return annoExtra === currentAnno;
            }).sort((a, b) => new Date(b.data) - new Date(a.data));
            
            if (entrateAnno.length === 0) {
                entrateBody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px;">Nessuna entrata extra</td></tr>';
            } else {
                entrateAnno.forEach((e, index) => {
                    const row = entrateBody.insertRow();
                    row.innerHTML = `
                        <td>${new Date(e.data).toLocaleDateString('it-IT')}</td>
                        <td>${e.servizio || ''}</td>
                        <td>${e.cliente || ''}</td>
                        <td style="color: #4CAF50;">€${parseFloat(e.importo).toFixed(2)}</td>
                        <td>
                            <button class="btn btn-edit btn-small" onclick="modificaExtra('entrata', ${index})">✏️</button>
                            <button class="btn btn-delete btn-small" onclick="eliminaExtra('entrata', ${index})">🗑️</button>
                        </td>
                    `;
                });
            }
            
            const usciteAnno = extraDb.uscite.filter(e => {
                const annoExtra = e.anno || new Date(e.data).getFullYear();
                return annoExtra === currentAnno;
            }).sort((a, b) => new Date(b.data) - new Date(a.data));
            
            if (usciteAnno.length === 0) {
                usciteBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Nessuna uscita</td></tr>';
            } else {
                usciteAnno.forEach((e, index) => {
                    const row = usciteBody.insertRow();
                    row.innerHTML = `
                        <td>${new Date(e.data).toLocaleDateString('it-IT')}</td>
                        <td>${e.struttura === 'love' ? '💕 Love Nest' : e.struttura === 'tart' ? '🐢 Tartaruga' : e.struttura}</td>
                        <td>${e.categoria || ''}</td>
                        <td>${e.descrizione || ''}</td>
                        <td style="color: #f44336;">€${parseFloat(e.importo).toFixed(2)}</td>
                        <td>
                            <button class="btn btn-edit btn-small" onclick="modificaExtra('uscita', ${index})">✏️</button>
                            <button class="btn btn-delete btn-small" onclick="eliminaExtra('uscita', ${index})">🗑️</button>
                        </td>
                    `;
                });
            }
        }
        
        function showExtraForm(tipo) {
            extraTipo = tipo;
            extraModalMode = 'new';
            currentExtraId = null;
            
            document.getElementById('modal-extra-title').textContent = tipo === 'entrata' ? '➕ Nuova Entrata Extra' : '➖ Nuova Uscita';
            document.getElementById('extra-tipo').value = tipo;
            document.getElementById('extra-id').value = '';
            
            document.getElementById('extra-form-entrata').classList.toggle('hidden', tipo !== 'entrata');
            document.getElementById('extra-form-uscita').classList.toggle('hidden', tipo !== 'uscita');
            
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('extra-data').value = today;
            document.getElementById('extra-servizio').value = config.servizi[0] || '';
            document.getElementById('extra-cliente').value = config.clienti[0] || '';
            document.getElementById('extra-struttura').value = 'love';
            document.getElementById('extra-categoria').value = config.categorie[0] || '';
            document.getElementById('extra-descrizione').value = '';
            document.getElementById('extra-importo').value = '';
            document.getElementById('extra-note').value = '';
            
            document.getElementById('extra-anno').value = currentAnno;
            document.getElementById('btn-elimina-extra').style.display = 'none';
            document.getElementById('modal-extra').style.display = 'block';
        }
        
        function salvaExtra() {
            const tipo = document.getElementById('extra-tipo').value;
            const data = document.getElementById('extra-data').value;
            const importo = parseFloat(document.getElementById('extra-importo').value);
            const anno = parseInt(document.getElementById('extra-anno').value);
            const note = document.getElementById('extra-note').value;
            
            if (!data || !importo) {
                alert('❌ Compila tutti i campi obbligatori!');
                return;
            }
            
            const extraData = {
                data: data,
                importo: importo,
                anno: anno,
                note: note || ''
            };
            
            if (tipo === 'entrata') {
                extraData.servizio = document.getElementById('extra-servizio').value;
                extraData.cliente = document.getElementById('extra-cliente').value;
            } else {
                extraData.struttura = document.getElementById('extra-struttura').value;
                extraData.categoria = document.getElementById('extra-categoria').value;
                extraData.descrizione = document.getElementById('extra-descrizione').value;
            }
            
            if (extraModalMode === 'new') {
                extraDb[tipo === 'entrata' ? 'entrate' : 'uscite'].push(extraData);
            } else {
                const index = parseInt(currentExtraId);
                extraDb[tipo === 'entrata' ? 'entrate' : 'uscite'][index] = extraData;
            }
            
            extraDb.entrate.sort((a, b) => new Date(b.data) - new Date(a.data));
            extraDb.uscite.sort((a, b) => new Date(b.data) - new Date(a.data));
            
            saveToStorage();
            updateAll();
            closeModal('modal-extra');
            
            alert('✅ ' + (extraModalMode === 'new' ? 'Inserito!' : 'Aggiornato!'));
        }
        
        function modificaExtra(tipo, index) {
            const lista = tipo === 'entrata' ? extraDb.entrate : extraDb.uscite;
            const extra = lista[index];
            
            extraTipo = tipo;
            extraModalMode = 'edit';
            currentExtraId = index;
            
            document.getElementById('modal-extra-title').textContent = tipo === 'entrata' ? '✏️ Modifica Entrata Extra' : '✏️ Modifica Uscita';
            document.getElementById('extra-tipo').value = tipo;
            document.getElementById('extra-id').value = index;
            
            document.getElementById('extra-form-entrata').classList.toggle('hidden', tipo !== 'entrata');
            document.getElementById('extra-form-uscita').classList.toggle('hidden', tipo !== 'uscita');
            
            document.getElementById('extra-data').value = extra.data;
            document.getElementById('extra-importo').value = extra.importo;
            document.getElementById('extra-anno').value = extra.anno || new Date(extra.data).getFullYear();
            document.getElementById('extra-note').value = extra.note || '';
            
            if (tipo === 'entrata') {
                document.getElementById('extra-servizio').value = extra.servizio || '';
                document.getElementById('extra-cliente').value = extra.cliente || '';
            } else {
                document.getElementById('extra-struttura').value = extra.struttura || 'love';
                document.getElementById('extra-categoria').value = extra.categoria || '';
                document.getElementById('extra-descrizione').value = extra.descrizione || '';
            }
            
            document.getElementById('btn-elimina-extra').style.display = 'block';
            document.getElementById('modal-extra').style.display = 'block';
        }
        
        function eliminaExtra(tipo, index) {
            if (!confirm('Sei sicuro di voler eliminare questo elemento?')) return;
            
            const lista = tipo === 'entrata' ? extraDb.entrate : extraDb.uscite;
            lista.splice(index, 1);
            
            saveToStorage();
            updateAll();
            
            alert('✅ Eliminato!');
        }
        
        function eliminaExtraConferma() {
            const tipo = document.getElementById('extra-tipo').value;
            const index = parseInt(currentExtraId);
            eliminaExtra(tipo, index);
            closeModal('modal-extra');
        }
        
        function updateOtaList() {
            const otaList = document.getElementById('ota-list');
            otaList.innerHTML = '';
            
            config.ota.forEach((ota, index) => {
                const div = document.createElement('div');
                div.className = 'ota-item';
                div.innerHTML = `
                    <div>
                        <span class="ota-color-preview" style="background: ${ota.colore};"></span>
                        <span style="margin-right: 10px;">${ota.emoji}</span>
                        <strong>${ota.nome}</strong>
                        <small style="margin-left: 10px; color: #666;">${ota.tipo === 'entrata' ? 'Entrata' : 'Uscita'} - Tasse: ${ota.tassa}</small>
                    </div>
                    <div>
                        <button class="btn btn-edit btn-small" onclick="modificaOta(${index})">✏️</button>
                        <button class="btn btn-delete btn-small" onclick="eliminaOta(${index})">🗑️</button>
                    </div>
                `;
                otaList.appendChild(div);
            });
        }
        
        function showOtaModal() {
            document.getElementById('modal-ota-title').textContent = '➕ Nuova OTA';
            document.getElementById('ota-id').value = '';
            document.getElementById('ota-nome').value = '';
            document.getElementById('ota-emoji').value = '📱';
            document.getElementById('ota-colore').value = '#FF5A5F';
            document.getElementById('ota-colore-hex').value = '#FF5A5F';
            document.getElementById('ota-tipo').value = 'entrata';
            document.getElementById('ota-tassa').value = 'si';
            document.getElementById('ota-note').value = '';
            
            document.getElementById('btn-elimina-ota').style.display = 'none';
            document.getElementById('modal-ota').style.display = 'block';
        }
        
        function modificaOta(index) {
            const ota = config.ota[index];
            
            document.getElementById('modal-ota-title').textContent = '✏️ Modifica OTA';
            document.getElementById('ota-id').value = index;
            document.getElementById('ota-nome').value = ota.nome;
            document.getElementById('ota-emoji').value = ota.emoji;
            document.getElementById('ota-colore').value = ota.colore;
            document.getElementById('ota-colore-hex').value = ota.colore;
            document.getElementById('ota-tipo').value = ota.tipo;
            document.getElementById('ota-tassa').value = ota.tassa;
            document.getElementById('ota-note').value = ota.note || '';
            
            document.getElementById('btn-elimina-ota').style.display = 'block';
            document.getElementById('modal-ota').style.display = 'block';
        }
        
        function salvaOta() {
            const id = document.getElementById('ota-id').value;
            const nome = document.getElementById('ota-nome').value.trim();
            const emoji = document.getElementById('ota-emoji').value;
            const colore = document.getElementById('ota-colore').value;
            const tipo = document.getElementById('ota-tipo').value;
            const tassa = document.getElementById('ota-tassa').value;
            const note = document.getElementById('ota-note').value;
            
            if (!nome) {
                alert('❌ Inserisci il nome dell\'OTA!');
                return;
            }
            
            const otaData = {
                id: id === '' ? nome.toLowerCase().replace(/[^a-z0-9]/g, '') : config.ota[id].id,
                nome: nome,
                emoji: emoji,
                colore: colore,
                tipo: tipo,
                tassa: tassa,
                note: note
            };
            
            if (id === '') {
                config.ota.push(otaData);
            } else {
                config.ota[parseInt(id)] = otaData;
            }
            
            saveToStorage();
            updateAll();
            closeModal('modal-ota');
            setupSelects();
            
            alert('✅ OTA salvata!');
        }
        
        function eliminaOta(index) {
            if (!confirm('Sei sicuro di voler eliminare questa OTA?\n\nATTENZIONE: Le prenotazioni con questa OTA non verranno eliminate, ma perderanno l\'emoji e il colore.')) return;
            
            config.ota.splice(index, 1);
            saveToStorage();
            updateAll();
            setupSelects();
            
            alert('✅ OTA eliminata!');
        }
        
        function eliminaOtaConferma() {
            const id = parseInt(document.getElementById('ota-id').value);
            eliminaOta(id);
            closeModal('modal-ota');
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        
        function salvaImpostazioni() {
            config.impostazioni.tassaLove = parseFloat(document.getElementById('tassa-love').value);
            config.impostazioni.tassaTart = parseFloat(document.getElementById('tassa-tart').value);
            config.annoCorrente = parseInt(document.getElementById('anno-pred').value);
            
            saveToStorage();
            alert('✅ Impostazioni salvate!');
        }
        
        function resetConfig() {
            if (!confirm('Sei sicuro di voler ripristinare la configurazione predefinita?\n\nLe tue prenotazioni e dati extra NON verranno eliminati.')) return;
            
            config.ota = [
                { id: 'airbnb', nome: 'Airbnb', emoji: '📱', colore: '#FF5A5F', tipo: 'entrata', tassa: 'si' },
                { id: 'booking', nome: 'Booking', emoji: '🌐', colore: '#003580', tipo: 'entrata', tassa: 'si' },
                { id: 'diretta', nome: 'Diretta', emoji: '💻', colore: '#4CAF50', tipo: 'entrata', tassa: 'no' },
                { id: 'beyond', nome: 'Beyond', emoji: '✨', colore: '#9C27B0', tipo: 'uscita', tassa: 'no' }
            ];
            
            config.impostazioni = {
                tassaLove: 2.50,
                tassaTart: 2.00
            };
            
            saveToStorage();
            setupImpostazioni();
            setupSelects();
            updateOtaList();
            
            alert('✅ Configurazione ripristinata!');
        }
        
        // ========== FUNZIONI GESTIONE CLIENTI E CATEGORIE ==========
        
        function gestisciClienti() {
            const content = document.getElementById('gestione-content');
            content.innerHTML = `
                <h3>👥 Gestione Clienti</h3>
                <div style="margin-bottom: 20px;">
                    <input type="text" id="nuovo-cliente" placeholder="Nome cliente" style="width: 70%; padding: 10px;">
                    <button class="btn btn-primary" onclick="aggiungiCliente()" style="margin-left: 10px;">➕ Aggiungi</button>
                </div>
                
                <div id="lista-clienti" style="max-height: 300px; overflow-y: auto;">
                    ${generaListaClienti()}
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-danger" onclick="closeModal('modal-gestione')">❌ Chiudi</button>
                </div>
            `;
            
            document.getElementById('modal-gestione-title').textContent = 'Gestione Clienti';
            document.getElementById('modal-gestione').style.display = 'block';
        }
        
        function gestisciCategorie() {
            const content = document.getElementById('gestione-content');
            content.innerHTML = `
                <h3>📁 Gestione Categorie Spese</h3>
                <div style="margin-bottom: 20px;">
                    <input type="text" id="nuova-categoria" placeholder="Nuova categoria (es: 📡 Internet)" style="width: 70%; padding: 10px;">
                    <button class="btn btn-primary" onclick="aggiungiCategoria()" style="margin-left: 10px;">➕ Aggiungi</button>
                </div>
                
                <div id="lista-categorie" style="max-height: 300px; overflow-y: auto;">
                    ${generaListaCategorie()}
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-danger" onclick="closeModal('modal-gestione')">❌ Chiudi</button>
                </div>
            `;
            
            document.getElementById('modal-gestione-title').textContent = 'Gestione Categorie';
            document.getElementById('modal-gestione').style.display = 'block';
        }
        
        function aggiungiCliente() {
            const input = document.getElementById('nuovo-cliente');
            const nome = input.value.trim();
            
            if (!nome) {
                alert('❌ Inserisci un nome cliente!');
                return;
            }
            
            if (!config.clienti.includes(nome)) {
                config.clienti.push(nome);
                saveToStorage();
                setupSelects();
                
                document.getElementById('lista-clienti').innerHTML = generaListaClienti();
                input.value = '';
                alert(`✅ Cliente "${nome}" aggiunto!`);
            } else {
                alert('⚠️ Questo cliente esiste già!');
            }
        }
        
        function aggiungiCategoria() {
            const input = document.getElementById('nuova-categoria');
            const nome = input.value.trim();
            
            if (!nome) {
                alert('❌ Inserisci una categoria!');
                return;
            }
            
            if (!config.categorie.includes(nome)) {
                config.categorie.push(nome);
                saveToStorage();
                setupSelects();
                
                document.getElementById('lista-categorie').innerHTML = generaListaCategorie();
                input.value = '';
                alert(`✅ Categoria "${nome}" aggiunta!`);
            } else {
                alert('⚠️ Questa categoria esiste già!');
            }
        }
        
        function aggiungiClienteModal() {
            const nome = prompt('Inserisci il nome del nuovo cliente:');
            if (nome && nome.trim()) {
                const nomeTrimmed = nome.trim();
                if (!config.clienti.includes(nomeTrimmed)) {
                    config.clienti.push(nomeTrimmed);
                    saveToStorage();
                    setupSelects();
                    
                    document.getElementById('extra-cliente').value = nomeTrimmed;
                    alert(`✅ Cliente "${nomeTrimmed}" aggiunto!`);
                } else {
                    alert('⚠️ Questo cliente esiste già!');
                }
            }
        }
        
        function aggiungiCategoriaModal() {
            const nome = prompt('Inserisci il nome della nuova categoria:');
            if (nome && nome.trim()) {
                const nomeTrimmed = nome.trim();
                if (!config.categorie.includes(nomeTrimmed)) {
                    config.categorie.push(nomeTrimmed);
                    saveToStorage();
                    setupSelects();
                    
                    document.getElementById('extra-categoria').value = nomeTrimmed;
                    alert(`✅ Categoria "${nomeTrimmed}" aggiunta!`);
                } else {
                    alert('⚠️ Questa categoria esiste già!');
                }
            }
        }
        
        function rimuoviCliente(nome) {
            if (confirm(`Sei sicuro di voler rimuovere il cliente "${nome}"?`)) {
                const index = config.clienti.indexOf(nome);
                if (index > -1) {
                    config.clienti.splice(index, 1);
                    saveToStorage();
                    setupSelects();
                    document.getElementById('lista-clienti').innerHTML = generaListaClienti();
                    alert(`✅ Cliente "${nome}" rimosso!`);
                }
            }
        }
        
        function rimuoviCategoria(nome) {
            if (confirm(`Sei sicuro di voler rimuovere la categoria "${nome}"?`)) {
                const index = config.categorie.indexOf(nome);
                if (index > -1) {
                    config.categorie.splice(index, 1);
                    saveToStorage();
                    setupSelects();
                    document.getElementById('lista-categorie').innerHTML = generaListaCategorie();
                    alert(`✅ Categoria "${nome}" rimossa!`);
                }
            }
        }
        
        function generaListaClienti() {
            return config.clienti.map(cliente => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; margin: 5px 0; background: #f8f9fa; border-radius: 6px;">
                    <span>${cliente}</span>
                    <button class="btn btn-delete btn-small" onclick="rimuoviCliente('${cliente}')">🗑️</button>
                </div>
            `).join('');
        }
        
        function generaListaCategorie() {
            return config.categorie.map(cat => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; margin: 5px 0; background: #f8f9fa; border-radius: 6px;">
                    <span>${cat}</span>
                    <button class="btn btn-delete btn-small" onclick="rimuoviCategoria('${cat}')">🗑️</button>
                </div>
            `).join('');
        }
        
        // ========== FUNZIONI EXPORT ==========
        
        function exportPDFSelezionato() {
            const select = document.getElementById('export-select');
            const value = select.value;
            
            if (!value) {
                alert('❌ Seleziona cosa esportare!');
                return;
            }
            
            let content = '';
            let title = '';
            
            if (value === 'all') {
                title = 'Tutti i dati - ' + new Date().toLocaleDateString('it-IT');
                content = generaReportCompleto();
            } else if (value.startsWith('love_') || value.startsWith('tart_')) {
                const [struttura, anno] = value.split('_');
                title = `${struttura === 'love' ? 'Love Nest' : 'Tartaruga'} ${anno}`;
                content = generaReportStruttura(struttura, parseInt(anno));
            } else if (value === 'extra_entrate') {
                title = 'Entrate Extra';
                content = generaReportEntrateExtra();
            } else if (value === 'extra_uscite') {
                title = 'Uscite Extra';
                content = generaReportUsciteExtra();
            } else if (value === 'dirette') {
                title = 'Prenotazioni Dirette';
                content = generaReportDirette();
            }
            
            // Creazione PDF semplice
            const win = window.open('', '_blank');
            win.document.write(`
                <html>
                <head>
                    <title>${title}</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        h1 { color: #333; }
                        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                        .total { font-weight: bold; background-color: #f9f9f9; }
                    </style>
                </head>
                <body>
                    <h1>${title}</h1>
                    <p>Esportato il: ${new Date().toLocaleDateString('it-IT')} ${new Date().toLocaleTimeString('it-IT')}</p>
                    ${content}
                </body>
                </html>
            `);
            win.document.close();
            win.print();
        }
        
        function exportCSVSelezionato() {
            const select = document.getElementById('export-select');
            const value = select.value;
            
            if (!value) {
                alert('❌ Seleziona cosa esportare!');
                return;
            }
            
            let csv = '';
            let filename = '';
            
            if (value === 'all') {
                filename = `tutti-dati-${new Date().toISOString().split('T')[0]}.csv`;
                csv = generaCSVCompleto();
            } else if (value.startsWith('love_') || value.startsWith('tart_')) {
                const [struttura, anno] = value.split('_');
                filename = `${struttura}-${anno}.csv`;
                csv = generaCSVStruttura(struttura, parseInt(anno));
            } else if (value === 'extra_entrate') {
                filename = `entrate-extra-${new Date().toISOString().split('T')[0]}.csv`;
                csv = generaCSVEntrateExtra();
            } else if (value === 'extra_uscite') {
                filename = `uscite-extra-${new Date().toISOString().split('T')[0]}.csv`;
                csv = generaCSVUsciteExtra();
            } else if (value === 'dirette') {
                filename = `prenotazioni-dirette-${new Date().toISOString().split('T')[0]}.csv`;
                csv = generaCSVDirette();
            }
            
            // Download CSV
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
            URL.revokeObjectURL(link.href);
            
            alert(`✅ CSV esportato: ${filename}`);
        }
        
        function printReport() {
            exportPDFSelezionato();
        }
        
        function downloadBackup() {
            const backup = {
                db: db,
                extraDb: extraDb,
                config: config
            };
            
            const dataStr = JSON.stringify(backup, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `backup-gestionale-${new Date().toISOString().split('T')[0]}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        }
        
        function restoreBackup(input) {
            const file = input.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const backup = JSON.parse(e.target.result);
                    
                    if (confirm('Sei sicuro di voler ripristinare il backup?\n\nI dati attuali verranno sovrascritti.')) {
                        if (backup.db) db = backup.db;
                        if (backup.extraDb) extraDb = backup.extraDb;
                        if (backup.config) config = backup.config;
                        
                        saveToStorage();
                        init();
                        alert('✅ Backup ripristinato con successo!');
                    }
                } catch (error) {
                    alert('❌ Errore nel file di backup: ' + error.message);
                }
            };
            reader.readAsText(file);
        }
        
        // ========== FUNZIONI HELPER PER REPORT ==========
        
        function generaReportCompleto() {
            let html = '<h2>📊 Report Completo</h2>';
            
            // Per ogni anno
            config.anni.sort((a, b) => b - a).forEach(anno => {
                html += `<h3>🎯 Anno ${anno}</h3>`;
                
                const love = calcolaTotali(db[`love_${anno}`] || []);
                const tart = calcolaTotali(db[`tart_${anno}`] || []);
                const spese = calcolaSpeseAnno(anno);
                const entrateExtra = calcolaEntrateExtraAnno(anno);
                const totale = love.netto_finale + tart.netto_finale + entrateExtra - spese;
                
                html += `
                    <table>
                        <tr><th>Struttura</th><th>Netto Finale</th><th>Prenotazioni</th></tr>
                        <tr><td>Love Nest</td><td>€${love.netto_finale.toFixed(2)}</td><td>${db[`love_${anno}`]?.length || 0}</td></tr>
                        <tr><td>Tartaruga</td><td>€${tart.netto_finale.toFixed(2)}</td><td>${db[`tart_${anno}`]?.length || 0}</td></tr>
                        <tr><td>Entrate Extra</td><td>€${entrateExtra.toFixed(2)}</td><td></td></tr>
                        <tr><td>Spese</td><td>-€${spese.toFixed(2)}</td><td></td></tr>
                        <tr class="total"><td><strong>TOTALE</strong></td><td><strong>€${totale.toFixed(2)}</strong></td><td></td></tr>
                    </table>
                `;
            });
            
            return html;
        }
        
        function generaReportStruttura(struttura, anno) {
            const prenotazioni = db[`${struttura}_${anno}`] || [];
            const totali = calcolaTotali(prenotazioni);
            const strutturaNome = struttura === 'love' ? 'Love Nest' : 'Tartaruga';
            
            let html = `<h2>${strutturaNome} ${anno}</h2>`;
            html += `<p>Totale prenotazioni: ${prenotazioni.length}</p>`;
            html += `<p>Netto finale: €${totali.netto_finale.toFixed(2)}</p>`;
            html += `<p>Tasse da versare: €${totali.tasse.toFixed(2)}</p>`;
            
            html += `
                <table>
                    <tr><th>Data</th><th>OTA</th><th>Ospite</th><th>Notti</th><th>Netto</th><th>Tasse</th><th>Netto Finale</th></tr>
            `;
            
            prenotazioni.sort((a, b) => new Date(b.data) - new Date(a.data)).forEach(p => {
                html += `
                    <tr>
                        <td>${new Date(p.data).toLocaleDateString('it-IT')}</td>
                        <td>${p.ota}</td>
                        <td>${p.ospite}</td>
                        <td>${p.notti}</td>
                        <td>€${parseFloat(p.netto || 0).toFixed(2)}</td>
                        <td>€${parseFloat(p.tasse_da_versare || 0).toFixed(2)}</td>
                        <td>€${parseFloat(p.netto_finale || p.netto || 0).toFixed(2)}</td>
                    </tr>
                `;
            });
            
            html += `</table>`;
            return html;
        }
        
        function generaCSVCompleto() {
            let csv = 'Anno,Struttura,Netto Finale,Prenotazioni,Entrate Extra,Spese,Totale\n';
            
            config.anni.sort((a, b) => b - a).forEach(anno => {
                const love = calcolaTotali(db[`love_${anno}`] || []);
                const tart = calcolaTotali(db[`tart_${anno}`] || []);
                const spese = calcolaSpeseAnno(anno);
                const entrateExtra = calcolaEntrateExtraAnno(anno);
                const totale = love.netto_finale + tart.netto_finale + entrateExtra - spese;
                
                csv += `${anno},Love Nest,${love.netto_finale.toFixed(2)},${db[`love_${anno}`]?.length || 0},${entrateExtra.toFixed(2)},-${spese.toFixed(2)},${totale.toFixed(2)}\n`;
                csv += `${anno},Tartaruga,${tart.netto_finale.toFixed(2)},${db[`tart_${anno}`]?.length || 0},0,0,0\n`;
            });
            
            return csv;
        }
        
        function generaCSVStruttura(struttura, anno) {
            const prenotazioni = db[`${struttura}_${anno}`] || [];
            let csv = 'Data,OTA,Ospite,Notti,Netto,Tasse,Netto Finale,Note\n';
            
            prenotazioni.sort((a, b) => new Date(b.data) - new Date(a.data)).forEach(p => {
                csv += `"${p.data}","${p.ota}","${p.ospite}",${p.notti},${parseFloat(p.netto || 0).toFixed(2)},${parseFloat(p.tasse_da_versare || 0).toFixed(2)},${parseFloat(p.netto_finale || p.netto || 0).toFixed(2)},"${p.note || ''}"\n`;
            });
            
            return csv;
        }
        
        // ========== FUNZIONE CHIUDI ANNO CORRENTE ==========
        
        function chiudiAnnoCorrente() {
            const conferma = confirm(`Sei sicuro di voler chiudere l'anno ${currentAnno}?\n\nQuesta operazione creerà un backup dell'anno e bloccherà eventuali modifiche ai dati di quell'anno.`);
            
            if (conferma) {
                // Crea backup dell'anno corrente
                const backup = {
                    db: {},
                    extraDb: {
                        entrate: extraDb.entrate.filter(e => {
                            const annoExtra = e.anno || new Date(e.data).getFullYear();
                            return annoExtra === currentAnno;
                        }),
                        uscite: extraDb.uscite.filter(e => {
                            const annoExtra = e.anno || new Date(e.data).getFullYear();
                            return annoExtra === currentAnno;
                        })
                    },
                    config: { ...config, annoChiuso: currentAnno }
                };
                
                // Salva tutti i dati dell'anno corrente
                Object.keys(db).forEach(key => {
                    if (key.includes(`_${currentAnno}`)) {
                        backup.db[key] = db[key];
                    }
                });
                
                const dataStr = JSON.stringify(backup, null, 2);
                const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', dataUri);
                linkElement.setAttribute('download', `chiusura-anno-${currentAnno}-${new Date().toISOString().split('T')[0]}.json`);
                linkElement.click();
                
                alert(`✅ Anno ${currentAnno} chiuso con successo!\n\nBackup scaricato. I dati rimangono disponibili nel sistema.`);
            }
        }
        
        function aggiungiAnno() {
            const nuovoAnno = prompt('Inserisci il nuovo anno (es: 2027):');
            if (nuovoAnno && !isNaN(nuovoAnno) && nuovoAnno.length === 4) {
                const annoNum = parseInt(nuovoAnno);
                if (!config.anni.includes(annoNum)) {
                    config.anni.push(annoNum);
                    config.anni.sort((a, b) => b - a);
                    saveToStorage();
                    init();
                    alert(`✅ Anno ${annoNum} aggiunto con successo!`);
                } else {
                    alert('⚠️ Questo anno è già presente nel sistema!');
                }
            } else {
                alert('❌ Inserisci un anno valido (4 cifre)!');
            }
        }
        
        // INIZIALIZZA
        document.addEventListener('DOMContentLoaded', function() {
            init();
            updateCalcPreview();
            
            const oggi = new Date();
            const annoAttuale = oggi.getFullYear();
            if (!config.anni.includes(annoAttuale) && (config.anni.length === 0 || annoAttuale > Math.max(...config.anni))) {
                config.anni.push(annoAttuale);
                config.anni.sort((a, b) => b - a);
                currentAnno = annoAttuale;
                config.annoCorrente = annoAttuale;
                saveToStorage();
                init();
            }
            
            // Debug: mostra versione caricata
            const savedVersion = localStorage.getItem('db-version');
            console.log('✅ Sistema pronto!');
            console.log(`📊 DB Version nel codice: ${DB_VERSION}`);
            console.log(`💾 DB Version salvata: ${savedVersion || 'nessuna'}`);
            
            // Se la versione salvata non è 14, mostra alert
            if (savedVersion !== '14') {
                setTimeout(() => {
                    if (confirm('⚠️ DATI VECCHI RILEVATI!\n\nLa versione del database è vecchia.\n\nVuoi caricare i dati aggiornati?\n(Include Riccardo Maltana e totale corretto €1,339.34)')) {
                        localStorage.clear();
                        localStorage.setItem('db-version', '14');
                        location.reload();
                    }
                }, 1000);
            }
        });
    