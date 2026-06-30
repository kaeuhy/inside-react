import {useState} from "react";

export default function PlayGround() {
    const [user, setUser] = useState({
        name: 'eunhyeon',
        address: {
            city: 'seoul',
            zip: '12345'
        },
        profile: {
            age: 20
        }
    })

    const onClickUser = () => {
        setUser((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                city: 'jeju'
            },
            profile: {
                ...prev.profile,
                age: 23
            }
        }))
    }


    return (
        <div>
            <button type="button" onClick={onClickUser}>user 정보 변경 버튼</button>
            <p>출력 값: {user.name}, {user.address.city}, {user.address.zip}, {user.profile.age}</p>
        </div>
    )
}