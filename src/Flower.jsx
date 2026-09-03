function Flower({ name="חמניה", petalColor="צהוב", centerColor="חום" }) {

    const flower = (name) => alert(`אני פרח מסוג ${name}`);

    return (
        <div style={{ color: centerColor, backgroundColor: petalColor }}>
            <p>שם הפרח: {name}</p>
            <p>צבע עלי הכותרת: {petalColor}</p>
            <p>צבע מרכז הפרח: {centerColor}</p>
            <button onClick={() => flower(name)}>פרח </button>
        </div>
        
    );
}

