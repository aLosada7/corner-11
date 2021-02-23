import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../store';
import { IUserModel } from '../../store/auth/types';

interface Props {
    user?: IUserModel
    players?: any[]
    onFetchTeam: (teamId: string) => void
}

const Home = (props: Props) => {
    useEffect(() => {
        if(props.user) {
            props.onFetchTeam(props.user.teamId);
        }
    }, [props.user])
    return (
        <div>
            <div>
                starters
                {props.players?.filter(player => player.starting).map(player => <div key={player._id}>{player.name}</div>)}
            </div>
            <div>
                bench
                {props.players?.filter(player => !player.starting).map(player => <div key={player._id}>{player.name}</div>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        user: state.auth.user,
        players: state.team.players
    }
}

const mapDispatchToProps = {
    onFetchTeam: (teamId: string) => ({ type: "FETCH_TEAM", teamId })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);