/* Copyright Contributors to the Open Cluster Management project */

import { Button, ButtonVariant, Divider, Flex, FlexItem, Icon, Tooltip } from '@patternfly/react-core'
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from '@patternfly/react-icons'
import { Fragment, ReactNode } from 'react'
import { Link } from 'react-router-dom-v5-compat'

export function StatusIcons(props: {
  compliant?: number
  violations?: number
  pending?: number
  unknown?: number
  compliantTooltip?: string
  violationsTooltip?: string
  pendingTooltip?: string
  unknownTooltip?: string
  compliantHref?: string
  violationHref?: string
  pendingHref?: string
  unknownHref?: string
  compliantOnClick?: () => void
  violationOnClick?: () => void
  pendingOnClick?: () => void
  unknownOnClick?: () => void
}) {
  const statuses: {
    key: string
    count: number
    icon: ReactNode
    tooltip?: string
    href?: string
    onClick?: () => void
  }[] = []

  if (props.compliant !== undefined && props.compliant) {
    statuses.push({
      key: 'compliant',
      count: props.compliant,
      icon: (
        <Icon status="success">
          <CheckCircleIcon />
        </Icon>
      ),
      tooltip: props.compliantTooltip,
      href: props.compliantHref,
      onClick: props.compliantOnClick,
    })
  }

  if (props.violations !== undefined && props.violations) {
    statuses.push({
      key: 'violations',
      count: props.violations,
      icon: (
        <Icon status="danger">
          <ExclamationCircleIcon />
        </Icon>
      ),
      tooltip: props.violationsTooltip,
      href: props.violationHref,
      onClick: props.violationOnClick,
    })
  }

  if (props.pending !== undefined && props.pending) {
    statuses.push({
      key: 'pending',
      count: props.pending,
      icon: (
        <Icon status="warning">
          <ExclamationTriangleIcon />
        </Icon>
      ),
      tooltip: props.pendingTooltip,
      href: props.pendingHref,
      onClick: props.pendingOnClick,
    })
  }

  if (props.unknown !== undefined && props.unknown) {
    statuses.push({
      key: 'unknown',
      count: props.unknown,
      icon: (
        <Icon status="warning">
          <ExclamationTriangleIcon />
        </Icon>
      ),
      tooltip: props.unknownTooltip,
      href: props.unknownHref,
      onClick: props.unknownOnClick,
    })
  }

  function getCount(count: number, href?: string, onClick?: () => void) {
    if (href) {
      return <Link to={href}>{count}</Link>
    } else if (onClick) {
      return (
        <Button size="sm" isInline variant={ButtonVariant.link} onClick={onClick}>
          {count}
        </Button>
      )
    } else {
      return count
    }
  }

  return (
    <Flex display={{ default: 'inlineFlex' }} spaceItems={{ default: 'spaceItemsMd' }}>
      {statuses.map(({ key, icon, count, tooltip, href, onClick }, index) => (
        <Fragment key={key}>
          {index !== 0 && <Divider key={`${key}_d`} orientation={{ default: 'vertical' }} />}
          <FlexItem>
            <Tooltip content={tooltip}>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>{icon}</FlexItem>
                <FlexItem>{getCount(count, href, onClick)}</FlexItem>
              </Flex>
            </Tooltip>
          </FlexItem>
        </Fragment>
      ))}
    </Flex>
  )
}
