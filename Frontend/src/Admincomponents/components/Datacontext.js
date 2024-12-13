// DataContext.js
import React, { createContext, useContext, useState ,useEffect} from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser || { firstname: '',lastname:'', email:'' };
  });

  const setUserData = (userData) => {
    setUser(userData);
  };
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  const [doctor, setDoctor] = useState(() => {
    const storedDoctor = JSON.parse(localStorage.getItem('doctor'));
      return storedDoctor || { firstname: '',lastname:'', email:'', hospital:'', specialization:'' };
    });
  
    const setDoctorData = (userData) => {
      setDoctor(userData);
    };
    useEffect(() => {
      localStorage.setItem('doctor', JSON.stringify(doctor));
    }, [doctor]);

    const [labagent, setLabagent] = useState(() => {
      const storedLabagent = JSON.parse(localStorage.getItem('labagent'));
        return storedLabagent || { firstname: '',lastname:'', email:'', labname:'' };
      });
    
      const setLabagentData = (userData) => {
        setLabagent(userData);
      };
      useEffect(() => {
        localStorage.setItem('labagent', JSON.stringify(labagent));
      }, [labagent]);
    
      const [superadmin, setSuperadmin] = useState(() => {
        const storedSuperadmin = JSON.parse(localStorage.getItem('superadmin'));
          return storedSuperadmin || { email:'', password:'' };
        });
      
        const setSuperadminData = (userData) => {
          setSuperadmin(userData);
        };
        useEffect(() => {
          localStorage.setItem('superadmin', JSON.stringify(superadmin));
        }, [superadmin]);

        const [admin, setAdmin] = useState(() => {
          const storedAdmin = JSON.parse(localStorage.getItem('admin'));
            return storedAdmin || { email:'', password:'' };
          });
        
          const setAdminData = (userData) => {
            setAdmin(userData);
          };
          useEffect(() => {
            localStorage.setItem('admin', JSON.stringify(admin));
          }, [admin]);

  const addToData = (newItem) => {
    setData([...data, newItem]);
  };

  const addToCart = (item) => {
    if(cartItems.length>0 && item.planName === cartItems[0].planName){
      alert("plan already exists")
    }
    else{
      alert("Plan added to cart")

        setCartItems([
          { ...item},
        ]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };


  return (
    <DataContext.Provider value={{ data, addToData, cartItems, addToCart, removeFromCart, user, setUserData, doctor, setDoctorData, labagent, setLabagentData, superadmin, setSuperadminData, admin, setAdminData}}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
