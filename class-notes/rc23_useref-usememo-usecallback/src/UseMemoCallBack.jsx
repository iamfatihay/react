import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Users from "./components/Users";
const UseMemoCallBack = () => {
  const [kisiler, setKisiler] = useState([]);
  const [text, setText] = useState("");
  const [bitmisHali, setBitmis] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setKisiler(res.data));
  }, []);

  //*bir değer için= useMemo Memoize edilmiş bir değer döndürür. inputa her veri girildiğinde ekranı değiştirmeyi bitmisHali değişkeni ve search butonuyla durdurduk, butona basılmayı bekler ama user componenti render etmeye devam eder.text ile gönderirsem inputa her harf girildiğinde hem ekran değişir hem sayfalar render olur,bu yüzden useMemo hook u ile sarmallamalıyım

  const filtreli = useMemo(
    () => kisiler.filter((i) => i.name.includes(bitmisHali)),
    [kisiler, bitmisHali]
  );

  const ekle = useCallback(() => {
    setKisiler([...kisiler, { id: kisiler.length + 1, name: "osman" }]);
  }, [kisiler]);

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setBitmis(text)}>SEARCH</button>
      <button onClick={ekle} id="add-button">
        EKLE
      </button>

      {/* ilk durumda filtreli yokken, axios tan çekilen 10 kişiyi Users a gönderirken, setText yüzünden Users gereksiz render olup duruyordu, bunu durdurmak için Users componentini (React) memo ile sarmalladım */}
      {/* <Users kisiler={kisiler}/> */}
      <Users kisiler={filtreli} />
    </div>
  );
};

export default UseMemoCallBack;
